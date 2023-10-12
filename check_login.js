const sql_connection = require("./db.js");

function check_password(login, password) {
	return connection.connect({
		connection.query(
			"SELECT id FROM users WHERE login=${login} AND password=${password}",
			(err, res) => {
				if (res && res.length > 0) return true;
				else return false;
		})
	});
}
			