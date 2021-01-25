import React from 'react'
import PropTypes from 'prop-types'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @visibleName The Best Button Ever 🐙
 * @version 1.0.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
 */
export default class Button extends React.Component {
  static propTypes = {
    /**
     * The size of the Button
     *
     * @since Version 1.0.1
     */
    foo: PropTypes.number,
    /**
     * The color for the button
     *
     * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
     * @see See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for a list of color names
     */
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * The width of the button
     *
     * @deprecated Do not use! Use `size` instead!
     */
    width: PropTypes.string,
  }
  static defaultProps = {
    foo: 42
  }

  /**
   * Insert text at cursor position.
   *
   * @param {string} text
   * @public
   */
  insertAtCursor(text) {
    console.log('tet: ', test);
  }

  render() {
    const { children } = this.props;
    return <button>{children}</button>
  }
}