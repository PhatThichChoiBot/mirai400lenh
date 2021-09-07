module.exports.config = {
	name: "misthy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh misthy",
	commandCategory: "Hình Ảnh",
	usages: "misthy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://vinhnguyenofficial.ga/misthy-1.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh misthy 🥳🥳`,
						attachment: fs.createReadStream(__dirname + `/cache/misthy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/misthy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/misthy.${ext}`)).on("close", callback);
			})
}