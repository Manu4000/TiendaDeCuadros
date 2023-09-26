// En este controlador, puedes definir acciones que requieran autenticación

exports.profile = (req, res) => {
    // Acción que requiere autenticación (por ejemplo, mostrar el perfil del usuario)
    res.json({ message: 'Perfil de usuario' });
  };
  