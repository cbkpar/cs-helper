import { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabidx: 0,
    };
  }

  changetab = (e, idx) => {
    e.preventDefault();
    this.setState({
      tabidx: idx
    });
  }

  componentDidMount() {
    if (window.location.pathname.includes('/Algorithm')) {
      this.setState({
        tabidx: 1
      });
    }
    if (window.location.pathname.includes('/DataStructure')) {
      this.setState({
        tabidx: 2
      });
    }
    if (window.location.pathname.includes('/Database')) {
      this.setState({
        tabidx: 3
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div onClick={(e) => this.changetab(e, 0)}><Link to="/">
            <img className="logo" src={process.env.PUBLIC_URL + "/logo192.jpg"} alt="" />
          </Link>
          </div>
          <ul>
            <li className={this.state.tabidx === 1 ? "active" : ""} onClick={(e) => this.changetab(e, 1)}><Link to="/Algorithm">알고리즘</Link></li>
            <li className={this.state.tabidx === 2 ? "active" : ""} onClick={(e) => this.changetab(e, 2)}><Link to="/DataStructure">자료구조</Link></li>
            <li className={this.state.tabidx === 3 ? "active" : ""} onClick={(e) => this.changetab(e, 3)}><Link to="/Database">데이터베이스</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header