import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hi, I'm nabeen.</p>
          <p>💪Job: Software Engineer / 😍Likes: Blockchain, Cryptocurrency, AirDrop / 😎Target: Remote worker:D / 👍Skills: Blogger, Investor, Columnist, Engineering</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>My Career</p>
          <h3>Apr. 2008 - Feb. 2013</h3>
          <p>QA Engineer.<br />
          salary : about $42,000 per year</p>
          <h3>Mar. 2013 - Sep. 2013</h3>
          <p>Developer. #HTML #CSS #JavaScript #jQuery #PHP<br />
          salary : about $34,000 per year</p>
          <h3>Des. 2013 - Apr. 2016</h3>
          <p>Developer. #PHP #CakePHP #Phalcon #HTML #CSS #JavaScript<br />
          salary : about $35,000 per year</p>
          <h3>Jun. 2016 - currently</h3>
          <p>Developer. #PHP #Codeigniter #Python #Perl #Ruby #RoR #Swift #NodeJS #HTML #CSS #JavaScript<br />
          salary : about $46,000 per year</p>
          <h3>??? - ???</h3>
          <p>!!WANTED!! OVER $50,000 per year or remote working :D</p>
          <hr />
          <p>My LT</p>
          <ul>
            <li><a href="https://speakerdeck.com/nabeen/php-conference-fukuoka-2017">僕達がやってきたレガシープロジェクトとの付き合い方</a> at PHPカンファレンス福岡2017</li>
            <li><a href="https://speakerdeck.com/nabeen/listen-to-me-lt-tournament-number-7">師走にやる気が生まれて師走にやる気が死んだ話</a> at 俺の話を聞け！！LT大会 #7</li>
          </ul>
          <hr />
          <p>My OSS</p>
          <ul>
            <li><a href="https://github.com/nabeen/linebot-sls-bp-kotlin">linebot-sls-bp-kotlin</a> / LINE BOT written in Kotlin running on AWS Lambda</li>
            <li><a href="https://github.com/nabeen/gdwrap">gdwrap</a> / wrapper library for Google Drive REST API</li>
            <li><a href="https://github.com/nabeen/mbglob">mbglob</a> / wrapper library for glob.glob()</li>
          </ul>
          {close}
        </article>

        <article id="link" className={`${this.props.article === 'link' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Link</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Blog list I contributed.</p>
          <ul>
            <li><a href="https://nabeen.github.io/">⌘+C, ⌘+V</a> / Tech Blog on Firebase Hosting</li>
            <li><a href="https://medium.com/nabeen">⌘+C, ⌘+V DailyLog</a> / Tech Blog on Medium</li>
            {/* <li><a href="#">BEBEBE</a> / Personal Blog on Blogger</li> */}
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>You can contact me with Twitter or Facebook. Follow me on these SNS and send DM, please.</p>
          <ul className="icons">
            <li><a href="https://twitter.com/_nabeen" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/kenichirow" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main