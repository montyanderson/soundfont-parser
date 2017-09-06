module.exports = function soundfontParser(file) {
	const groups = [];
	let group;
	let region;

	for(let line of file.split("\n")) {
		line = line.trim();

		if(line === "") {

		} else if(line.startsWith("//")) {

		} else if(line.startsWith("<") && line.endsWith(">")) {
			const tag = line.slice(1, -1);

			if(tag === "group") {
				group = {
					regions: []
				};

				groups.push(group);

				region = null;
			} else if(tag === "region") {
				region = {};

				group.regions.push(region);
			} else {
				throw new Error(`tag '${tag}' unrecognised`);
			}
		} else {
			for(let pair of line.split(" ")) {
				const [ key, value ] = pair.split("=");

				if(region) {
					region[key] = value;
				} else {
					group[key] = value;
				}
			}
		}
	}

	return groups;
}
