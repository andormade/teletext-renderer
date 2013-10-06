var Teletext = {

	/*
	 * Teletext Control Characters
	 */

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to black and 
	 * select a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_BLACK: 0x00,
	
	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to red and select
	 * a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_RED: 0x01,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to green and
	 * select a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_GREEN: 0x02,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to yellow and
	 * select a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_YELLOW: 0x03,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to blue and select
	 * a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_BLUE: 0x04,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to magenta and
	 * select a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_MAGENTA: 0x05,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to cyan and select
	 * a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_CYAN: 0x06,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to white and
	 * select a G0 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	ALPHA_WHITE: 0x07,

	/**
	 * Teletext Control Character
	 * Function: This code causes the foreground pixels of the following 
	 * alphanumeric and mosaics characters to alternate between the foreground
	 * and background colours. The flash action is cancelled by a Steady 
	 * command.
	 *
	 * @static
	 * @constant {number}
	 */
	FLASH: 0x08,

	/**
	 * Teletext Control Character
	 * Function: This code cancels the flash action of code 0x08
	 *
	 * @static
	 * @constant {number}
	 */
	STEADY: 0x09,

	/**
	 * Teletext Control Character
	 * Function: This code cancels the action of the Start Box code 0x0b
	 *
	 * @static
	 * @constant {number}
	 */
	END_BOX: 0x0a,

	/**
	 * Teletext Control Character
	 * Function: On pages with the C5 or C6 bits set (Newsflash or subtitle),
	 * this code defines (on each appropriate row) the start of an area that 
	 * is to be boxed into the normal video picture. Characters outside this
	 * area are not displayed, but changes in display mode, colour, height 
	 * etc., will affect the boxed area. Cancelled by an End Box code 0x0a or
	 * by the start of a new row.
	 *
	 * @static
	 * @constant {number}
	 */
	START_BOX: 0x0b,

	/**
	 * Teletext Control Character
	 * Function: This code cancels the action of the double height, double 
	 * width and double size codes, and restores the characters to normal,
	 * single row height and single character width.
	 *
	 * @static
	 * @constant {number}
	 */
	NORMAL_SIZE: 0x0c,

	/**
	 * Teletext Control Character
	 * Function: The characters and mosaics following a double height code are
	 * stretched into the following row. The origin of a character is the upper
	 * character position. The whole of an enlarged character is displayed with
	 * the attributes that apply to the origin of the character. When double
	 * height (or double size) characters are used on a given row, the row
	 * below normal height characters on that row is displayed with the same
	 * local background colour and no foreground data. Any transmitted Level 1
	 * characters and attributes for the lower row are ignored.
	 *
	 * @static
	 * @constant {number}
	 */
	DOUBLE_HEIGHT: 0x0d,

	/**
	 * Teletext Control Character
	 * Set the foreground colour of the characters to black and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_BLACK: 0x10,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to red and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_RED: 0x11,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to green and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_GREEN: 0x12,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to yellow and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_YELLOW: 0x13,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to blue and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_BLUE: 0x14,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to magenta and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_MAGENTA: 0x15,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to cyan and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_CYAN: 0x16,

	/**
	 * Teletext Control Character
	 * Function: Set the foreground colour of the characters to white and
	 * select the G1 set as the current default character set.
	 *
	 * @static
	 * @constant {number}
	 */
	MOSAICS_WHITE: 0x17,

	/**
	 * Teletext Control Character
	 * Function: The following characters up to the end of the row, or until a
	 * Colour Code attribute (codes 0x00 to 0x07 or 0x10 to 0x17) is
	 * encountered, are to be displayed as SPACES until revealed by a decoder
	 * or user operation.
	 *
	 * @static
	 * @constant {number}
	 */
	CONCEAL: 0x18,

	/**
	 * Teletext Control Character
	 * Function: The blocks of a mosaics character adjoin one another.
	 *
	 * @static
	 * @constant {number}
	 */
	CONTIGUOUS_MOSAICS: 0x19,

	/**
	 * Teletext Control Character
	 * Function: Each block of a mosaics character is surrounded by a border of
	 * the background colour.
	 *
	 * @static
	 * @constant {number}
	 */
	SEPARATED_MOSAICS: 0x1a,

	/**
	 * Teletext Control Character
	 * Function: Toggles between the first and second G0 sets
	 *
	 * @static
	 * @constant {number}
	 */
	ESC: 0x1b,

	/**
	 * Teletext Control Character
	 * Function: This code immediately changes the background colour to the 
	 * colour at entry 0 of the background CLUT, or to the current Full Row
	 * colour if black background colour substitution is in operation. The 
	 * foreground colour is not affected.
	 *
	 * @static
	 * @constant {number}
	 */
	BLACK_BACKGROUND: 0x1c,

	/**
	 * Teletext Control Character
	 * Function: This code causes a new background colour to be selected
	 * immediately. Any following characters and mosaics may be invisible until
	 * a different foreground colour attribute is encountered.
	 * The foreground colour currently selected is adopted as the background
	 * colour.
	 *
	 * @static
	 * @constant {number}
	 */
	NEW_BACKGROUND: 0x1d,
	
	/**
	 * Teletext Control Character
	 * Function: Generally, all spacing attributes are displayed as spaces,
	 * implying at least one space between characters or mosaics with different
	 * colours in the same row.
	 *
	 * @static
	 * @constant {number}
	 */
	HOLD_MOSAICS: 0x1e,

	/**
	 * Teletext Control Character
	 * Function: This code cancels the Hold Mosaics mode.
	 *
	 * @static
	 * @constant {number}
	 */
	RELEASE_MOSAICS: 0x1f,



	/**
	 * Determines if the given character is a teletext control character
	 *
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isControlChar: function(char) {

		return (char < 32) ? true : false;
	},

	/**
	 * Determines if the given character is the space character
	 *
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isSpaceChar: function(char) {

		return (char === 32) ? true : false;
	},

	/**
	 * Determines if the given character is a mosaic character
	 *
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isMosaicChar: function(char) {

		return (32 <= char) && (char < 64) || (68 <= char) && (char < 128) ? true : false;
	},

	/**
	 * Determines if the given character is a color selector character
	 *
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isColorSelector: function(char) {

		return ((0x00 <= char) && (char < 0x08)) || ((0x10 <= char) && (char < 0x18)) ? true : false;
	},

	/**
	 * Determines if the given character is an alphanumeric color selector
	 *
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isAlphaColor: function(char) {

		return ((0x00 <= char) && (char < 0x08)) ? true : false;
	},

	/**
	 * Determines if the given characher is a mosaic color selector
	 * 
	 * @static
	 * @param {number} char - Character code
	 * @returns {boolean}
	 */
	isMosaiColor: function(char) {

		return ((0x10 <= char) && (char < 0x18)) ? true : false;	
	}
};
