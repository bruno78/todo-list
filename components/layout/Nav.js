import react from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // Set the active page:
    const todosClass = location.pathname === "/" ? "active" : "";
    const favoritesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navclass = collapsed ? "collapse" : "";

    return (
      <header>
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <span class="navbar-brand">Flux</span>
              <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
              <ul class"nav navbar-nav navbar-right">
                <li class="todosClass"><IndexLink to="/" onclick={this.toggleCollapse.bind(this)}>Todos</IndexLink></li>
                <li class="FavoritesClass"><Link to="favorites" onclick={this.toggleCollapse.bind(this)}>Favorites</Link></li>
                <li class="settingsClass"><Link to="about" onClick={this.toggleCollpse.bind(this)}>Settings</Link></li>
              </ul>
            </dib>
          </div>
        </nav>
      </header>
    );
  }
}
