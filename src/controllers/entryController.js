const {fetchEntry} = require("../services/entryServices");

exports.getEntries = async (req, res) => {
	const entries = await fetchEntry(); 

	res.json(entries)
}
