(function() {
	// List of emojis
	// Source: http://apps.timwhitlock.info/emoji/tables/unicode
	var EMOJIS = [
		// 1. Emoticons
		'&#x1F601;',
		'&#x1F602;',
		'&#x1F603;',
		'&#x1F604;',
		'&#x1F605;',
		'&#x1F606;',
		'&#x1F607;',
		'&#x1F608;',
		'&#x1F609;',
		'&#x1F60A;',
		'&#x1F60B;',
		'&#x1F60C;',
		'&#x1F60D;',
		'&#x1F60E;',
		'&#x1F60F;',
		'&#x1F610;',
		'&#x1F611;',
		'&#x1F612;',
		'&#x1F613;',
		'&#x1F614;',
		'&#x1F615;',
		'&#x1F616;',
		'&#x1F617;',
		'&#x1F618;',
		'&#x1F619;',
		'&#x1F61A;',
		'&#x1F61B;',
		'&#x1F61C;',
		'&#x1F61D;',
		'&#x1F61E;',
		'&#x1F61F;',
		'&#x1F620;',
		'&#x1F621;',
		'&#x1F622;',
		'&#x1F623;',
		'&#x1F624;',
		'&#x1F625;',
		'&#x1F626;',
		'&#x1F627;',
		'&#x1F628;',
		'&#x1F629;',
		'&#x1F62A;',
		'&#x1F62B;',
		'&#x1F62C;',
		'&#x1F62D;',
		'&#x1F62E;',
		'&#x1F62F;',
		'&#x1F630;',
		'&#x1F631;',
		'&#x1F632;',
		'&#x1F633;',
		'&#x1F634;',
		'&#x1F635;',
		'&#x1F636;',
		'&#x1F637;',
		'&#x1F638;',
		'&#x1F639;',
		'&#x1F63A;',
		'&#x1F63B;',
		'&#x1F63C;',
		'&#x1F63D;',
		'&#x1F63E;',
		'&#x1F63F;',
		'&#x1F640;',
		'&#x1F645;',
		'&#x1F646;',
		'&#x1F647;',
		'&#x1F648;',
		'&#x1F649;',
		'&#x1F64A;',
		'&#x1F64B;',
		'&#x1F64C;',
		'&#x1F64D;',
		'&#x1F64E;',
		'&#x1F64F;',

		// 2. Dingbats
		'&#x2702;',
		'&#x2705;',
		'&#x2708;',
		'&#x2709;',
		'&#x270A;',
		'&#x270B;',
		'&#x270C;',
		'&#x270F;',
		'&#x2712;',
		'&#x2714;',
		'&#x2716;',
		'&#x2728;',
		'&#x2733;',
		'&#x2734;',
		'&#x2744;',
		'&#x2747;',
		'&#x274C;',
		'&#x274E;',
		'&#x2753;',
		'&#x2754;',
		'&#x2755;',
		'&#x2757;',
		'&#x2764;',
		'&#x2795;',
		'&#x2796;',
		'&#x2797;',
		'&#x27A1;',
		'&#x27B0;',

		// 3. Transport and map symbols
		'&#x1F680;',
		'&#x1F681;',
		'&#x1F682;',
		'&#x1F683;',
		'&#x1F684;',
		'&#x1F685;',
		'&#x1F686;',
		'&#x1F687;',
		'&#x1F688;',
		'&#x1F689;',
		'&#x1F68A;',
		'&#x1F68B;',
		'&#x1F68C;',
		'&#x1F68D;',
		'&#x1F68E;',
		'&#x1F68F;',
		'&#x1F690;',
		'&#x1F691;',
		'&#x1F692;',
		'&#x1F693;',
		'&#x1F694;',
		'&#x1F695;',
		'&#x1F696;',
		'&#x1F697;',
		'&#x1F698;',
		'&#x1F699;',
		'&#x1F69A;',
		'&#x1F69B;',
		'&#x1F69C;',
		'&#x1F69D;',
		'&#x1F69E;',
		'&#x1F69F;',
		'&#x1F6A0;',
		'&#x1F6A1;',
		'&#x1F6A2;',
		'&#x1F6A3;',
		'&#x1F6A4;',
		'&#x1F6A5;',
		'&#x1F6A6;',
		'&#x1F6A7;',
		'&#x1F6A8;',
		'&#x1F6A9;',
		'&#x1F6AA;',
		'&#x1F6AB;',
		'&#x1F6AC;',
		'&#x1F6AD;',
		'&#x1F6AE;',
		'&#x1F6AF;',
		'&#x1F6B0;',
		'&#x1F6B1;',
		'&#x1F6B2;',
		'&#x1F6B3;',
		'&#x1F6B4;',
		'&#x1F6B5;',
		'&#x1F6B6;',
		'&#x1F6B7;',
		'&#x1F6B8;',
		'&#x1F6B9;',
		'&#x1F6BA;',
		'&#x1F6BB;',
		'&#x1F6BC;',
		'&#x1F6BD;',
		'&#x1F6BE;',
		'&#x1F6BF;',
		'&#x1F6C0;',

		// 4. Enclosed characters
		'&#x24C2;',
		'&#x1F170;',
		'&#x1F171;',
		'&#x1F17E;',
		'&#x1F17F;',
		'&#x1F18E;',
		'&#x1F191;',
		'&#x1F192;',
		'&#x1F193;',
		'&#x1F194;',
		'&#x1F195;',
		'&#x1F196;',
		'&#x1F197;',
		'&#x1F198;',
		'&#x1F199;',
		'&#x1F19A;',
		'&#x1F201;',
		'&#x1F202;',
		'&#x1F21A;',
		'&#x1F22F;',
		'&#x1F232;',
		'&#x1F233;',
		'&#x1F234;',
		'&#x1F235;',
		'&#x1F236;',
		'&#x1F237;',
		'&#x1F238;',
		'&#x1F239;',
		'&#x1F23A;',
		'&#x1F250;',
		'&#x1F251;',

		// @TODO: Add uncategorized into the list
	];

	// Total # of emojis
	var EMOJI_COUNT = EMOJIS.length;

	// Default # of emojis printed on load
	var DEFAULT_COUNT = 100;


	/**
	 * Function to be print emojis
	 *
	 * @param {int} count
	 * @returns {string}
	 */
	function getEmojiString(count) {
		var output = "";

		for (var i = 0; i < count; ++i) {
			output += EMOJIS[Math.floor(Math.random() * EMOJI_COUNT)];
		}

		return output;
	}

	/**
	 * Prints emoji string to the page
	 *
	 * @param {string} str
	 * @returns {void}
	 */
	function printEmojiString(str) {
		document.getElementById('output').innerHTML = str;
	}

	document.addEventListener('DOMContentLoaded', function(event) {
		// Listen to "Go" button's click event, and generate emojis based on user info.
		var generateButtonEl = document.getElementById('generate');
		generateButtonEl.addEventListener('click', function onGenerateButtonClicked(event) {
			// Prevent form submission
			event.preventDefault();
			event.stopPropagation();

			var count = parseInt(document.getElementById('count').value, 10);

			// @NOTE Some VERY basic error checking here.
			if (!isNaN(count)) {
				var output = getEmojiString(count);
				printEmojiString(output);
			}
		});

		// When user clicks in text area, we'll select all text by default.
		var outputEl = document.getElementById('output');
		outputEl.addEventListener('click', function onOutputClicked(event) {
			//this.setSelectionRange(0, this.value.length);
			this.select()
		});

		var defaultOutput = getEmojiString(DEFAULT_COUNT);
		printEmojiString(defaultOutput);
	});
})();