import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Fluffy State of Mind",
			cover:
				"./public/poster.png",
			artist: "Cutest Coopster - The Puppy Hip Hop - Single",
			audio: "https://dl.jtlr.cf/api/v1/posts/6242a7a1c113714d0b4b005a/download/6242a7a1c113718e9a4b005c",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
