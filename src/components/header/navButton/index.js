import React, { Component } from 'react';
import styles from '../header.module.scss';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false,
      hover: false,
    };

    this.section = <></>;
  }

  componentDidMount = () => {
    this.section = document.querySelector(`#${this.props.section}`);
    window.addEventListener('scroll', () => {
      const scrollWindow = window.scrollY + (styles.headerHeight.slice(0, -2) * 1 + 1);
      const inView = scrollWindow > this.section.offsetTop && scrollWindow < this.section.offsetTop + this.section.scrollHeight;

      if(!this.state.inView && inView) {
        this.setState({ inView: true });
      } else if(this.state.inView && !inView) {
        this.setState({ inView: false });
      }
    });
  }

  onHover = () => this.setState({ hover: true });

  onBlur = () => this.setState({ hover: false });

  onClick = () => {
    const headerHeight = styles.headerHeight.slice(0, -2);
    window.scrollTo({
      top: this.section.offsetTop - headerHeight,
      behavior: 'smooth',
    });
    window.history.replaceState(null, null, this.props.section);
  }

  render = () => {
    const { onClick, onHover, onBlur } = this;
    const { inView, hover } = this.state;
    return (
      <li onClick={onClick} onMouseOver={onHover} onMouseOut={onBlur} className={styles.headerNavListItem}>
        <wired-button elevation={inView ? 4 : hover ? 3 : 0} id={`${this.props.section}Button`} class={styles.headerNavListItemButton}>
          {this.props.text}
        </wired-button>
      </li>
    );
  }
}

export default NavButton;
