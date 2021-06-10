const mysqlConnection = require("../../database");

module.exports = {
  getUsers: (req, res, next) => {
    mysqlConnection.query("SELECT * FROM users", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  },

  //   deleteUser: (req, res) => {
  //     let id = req.params.id;
  //     console.log("hola ando por acá y veo que el params de id es " + id);
  //     mysqlConnection.query(
  //       "DELETE FROM USERS WHERE id=" + id,
  //       (err, rows, fields) => {
  //         if (err) {
  //           res.send(err);
  //         }
  //         res.redirect("./api/users/");
  //         console.log("ando cerrando lo que vendría siendo la query");
  //       }
  //     );
  //   },
};
