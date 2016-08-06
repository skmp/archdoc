var opcodeData = [
	{
		name: "add",
		description: "Adds two registers",
		tags: [
			"arithmetic", "32b"
		],
		encodings: [
			{
				bytes: "0f 67 77 /r",
				assembly: "add {gpr}, {gpr}/{mem}"
			}
		]
	},
	{
		name: "sub",
		description: "substructs two registers",
		tags: [
			"arithmetic", "32b"
		],
		encodings: [
			{
				bytes: "0f 27 77 /r",
				assembly: "sub {gpr}, {gpr}/{mem}"
			}
		]
	},
	{
		name: "xor",
		description: "xors two registers",
		tags: [
			"bitwise logical", "32b"
		],
		encodings: [
			{
				bytes: "0f 47 77 /r",
				assembly: "xor {gpr}, {gpr}/{mem}"
			}
		]
	}
];