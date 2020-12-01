export default function authorize(roles = []) {
  let autorizeRoles = roles;

  if (typeof roles === 'number') {
    autorizeRoles = [roles];
  }

  return [
    // eslint-disable-next-line consistent-return
    (req, res, next) => {
      if (autorizeRoles.length && !autorizeRoles.includes(req.user.info.rol)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      next();
    },
  ];
}
