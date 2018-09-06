module.exports = {
  registerUser: (req, res) => {
    let db = req.app.get("db");
    let { username, password } = req.body;
    db
      .register_user([username, password])
      .then(result => {
        req.session.user = result;
        req.session.user.user_id = result.user_id;
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  },

  loginUser: (req, res) => {
    let db = req.app.get("db");
    let { username, password } = req.body;
    db
      .login_user([username, password])
      .then(result => {
        console.log(result);
        req.session.user = result;
        req.session.user.user_id = result[0].user_id;
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Please Register");
      });
  },

  addProperty: (req, res) => {
    let db = req.app.get("db");

    let user_id = req.session.user[0].user_id;
    let {
      propertyName,
      propertyDescription,
      address,
      city,
      State,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    } = req.body;
    db
      .add_property(
        propertyName,
        propertyDescription,
        address,
        city,
        State,
        zip,
        imageUrl,
        loanAmount,
        monthlyMortgage,
        desiredRent,
        user_id
      )
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => { 
        res.status(500).send(err);
      });
    console.log("property added");
  },

  getProducts: (req, res) => {
    let db = req.app.get("db");
    let user_id = req.session.user[0].user_id;
    db
      .get_properties([user_id])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("properties got");
  },

  deleteProperty: (req, res) => {
    let db = req.app.get("db");
    let id = req.params.id;
    db
      .delete_property(id)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("property deleted");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
    console.log("session ended");
  },

  filterProperties: (req, res) => {
    console.log(req.query)
    let user_id = req.session.user[0].user_id
    let db = req.app.get('db')

    db.get_properties(user_id)
    .then((properties) => {
      let filtered_properties = properties.filter(e => {
        return e.desired_rent > req.query.filter
      })
      res.status(200).send(filtered_properties)
    })
    // let { filter } = req.query;
    // let user_id = req.session.user[0].user_id;

    // let db = req.app.get("db");
    // if (!filter) {
    //   res.status(500).send();
    // } else {
    //   if (filter) {
    //     db.filter_properties([user_id, filter]).then(resp => {
    //       res.status(200).send(resp);
    //     });
    //   }
    //   console.log('filtered')
    // }
  }
};
