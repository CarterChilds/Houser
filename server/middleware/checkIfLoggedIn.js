module.exports = function(req, res) {
  if (req.session.user) {
    res.status(200).send();
  }
 else {
     console.log('not logged in')
    res.status(403).send()}
};