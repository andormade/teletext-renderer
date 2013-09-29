var TeletextHelper = {
	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to black and 
	 * select a G0 set as the current default character set.
	 */
	ALPHA_BLACK: 0x00,
	
	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to red and select
	 * a G0 set as the current default character set.
	 */
	ALPHA_RED: 0x01,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to green and
	 * select a G0 set as the current default character set.
	 */
	ALPHA_GREEN: 0x02,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to yellow and
	 * select a G0 set as the current default character set.
	 */
	ALPHA_YELLOW: 0x03,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to blue and select
	 * a G0 set as the current default character set.
	 */
	ALPHA_BLUE: 0x04,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to magenta and
	 * select a G0 set as the current default character set.
	 */
	ALPHA_MAGENTA: 0x05,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to cyan and select
	 * a G0 set as the current default character set.
	 */
	ALPHA_CYAN: 0x06,

	/**
	 * Alpha Colour Code
	 * Function: Set the foreground colour of the characters to white and
	 * select a G0 set as the current default character set.
	 */
	ALPHA_WHITE: 0x07,

	/**
	 * Spacing Attribute
	 * Function: This code causes the foreground pixels of the following 
	 * alphanumeric and mosaics characters to alternate between the foreground
	 * and background colours. The flash action is cancelled by a Steady 
	 * command.
	 */
	FLASH: 0x08,

	/**
	 * Spacing Attribute
	 * Function: This code cancels the flash action of code 0x08
	 */
	STEADY: 0x09,

	/**
	 * Spacing Attribute
	 * Function: This code cancels the action of the Start Box code 0x0b
	 */
	END_BOX: 0x0a,

	/**
	 * Spacing Attribute
	 * Function: On pages with the C5 or C6 bits set (Newsflash or subtitle),
	 * this code defines (on each appropriate row) the start of an area that 
	 * is to be boxed into the normal video picture. Characters outside this
	 * area are not displayed, but changes in display mode, colour, height 
	 * etc., will affect the boxed area. Cancelled by an End Box code 0x0a or
	 * by the start of a new row.
	 */
	START_BOX: 0x0b,

	/**
	 * Spacing Attribute
	 * Function: This code cancels the action of the double height, double 
	 * width and double size codes, and restores the characters to normal,
	 * single row height and single character width.
	 */
	NORMAL_SIZE: 0x0c,

	/**
	 * Spacing Attribute
	 * Function: The characters and mosaics following a double height code are
	 * stretched into the following row. The origin of a character is the upper
	 * character position. The whole of an enlarged character is displayed with
	 * the attributes that apply to the origin of the character. When double
	 * height (or double size) characters are used on a given row, the row
	 * below normal height characters on that row is displayed with the same
	 * local background colour and no foreground data. Any transmitted Level 1
	 * characters and attributes for the lower row are ignored.
	 */
	DOUBLE_HEIGHT: 0x0d,

	/**
	 * Mosaic Colour Code
	 * Set the foreground colour of the characters to black and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_BLACK: 0x10,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to red and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_RED: 0x11,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to green and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_GREEN: 0x12,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to yellow and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_YELLOW: 0x13,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to blue and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_BLUE: 0x14,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to magenta and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_MAGENTA: 0x15,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to cyan and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_CYAN: 0x16,

	/**
	 * Mosaic Colour Code
	 * Function: Set the foreground colour of the characters to white and
	 * select the G1 set as the current default character set.
	 */
	MOSAICS_WHITE: 0x17,

	/**
	 * Spacing Attribute
	 * Function: The following characters up to the end of the row, or until a
	 * Colour Code attribute (codes 0x00 to 0x07 or 0x10 to 0x17) is
	 * encountered, are to be displayed as SPACES until revealed by a decoder
	 * or user operation.
	 */
	CONCEAL: 0x18,

	/**
	 * Spacing Attribute
	 * Function: The blocks of a mosaics character adjoin one another.
	 */
	CONTIGUOUS_MOSAICS: 0x19,

	/**
	 * Spacing Attribute
	 * Function: Each block of a mosaics character is surrounded by a border of
	 * the background colour.
	 */
	SEPARATED_MOSAICS: 0x1a,

	/**
	 * Spacing Attribute
	 * Toggles between the first and second G0 sets
	 */
	ESC: 0x1b,

	/**
	 * Spacing Attribute
	 * This code immediately changes the background colour to the colour at
	 * entry 0 of the background CLUT, or to the current Full Row colour if
	 * black background colour substitution is in operation. The foreground
	 * colour is not affected.
	 */
	BLACK_BACKGROUND: 0x1c,

	/**
	 * Spacing Attribute
	 * This code causes a new background colour to be selected immediately.
	 * Any following characters and mosaics may be invisible until a different
	 * foreground colour attribute is encountered.
	 * The foreground colour currently selected is adopted as the background
	 * colour.
	 */
	NEW_BACKGROUND: 0x1d,
	
	/**
	 * Spacing Attribute
	 * Generally, all spacing attributes are displayed as spaces, implying at
	 * least one space between characters or mosaics with different colours in
	 * the same row.
	 */
	HOLD_MOSAICS: 0x1e
};
