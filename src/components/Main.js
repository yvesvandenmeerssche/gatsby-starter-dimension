import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>represents and markets a hand-selected collection of privately owned and operated hotels in 100 destinations around the globe, from world capitals and exclusive mountaintops to hidden beaches, off-the-beaten-path escapes, and beyond. With a passion for genuine, culturally rooted hospitality and cutting-edge design and architecture, members go beyond merely curating their own neighbourhoods, we created an ecosystem for shared experiences among people united by passions like surfing, snowboarding, yoga, wine tasting, ... By the way, check out my <a href="#work">required funds</a>.</p>
          <p>Target markets are the major countries in Europe, UK, the USA, Canada, South Africa and Australia. Adults between 30 and 50 years old place a premium on experiences. A diverse and vast group united by a singular desire to Live The Life. Today’s travellers are savvy, value-conscious, and looking for authenticity. Through vivid, audiovisual storytelling, we get at the heart of what’s most meaningful for today’s traveller: the lived moment.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Funds</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>REQUIRED FUNDS: $600.000  to cover the financial needs for the next five years, mainly used to carry out the marketing plan in order to expand the brand and the geographical footprint to international markets. The goal is to grow LIVETHELIFE (LTL) into an international lifestyle brand.</p>
          <p>LTL tells the story of handpicked hotels across 100 destinations around the globe and a 1000 hoteliers who brought them boldly to life. Featuring a curated collection of spectacular photography and exclusive behind-the-scenes stories, LTL celebrates those who Live The Life. LTL is an alternative for the generic OTA's, offering travel content by leading writers, photographers, illustrators, and designers. Lean and mean company structure with a dynamic management team & an eye toward art, architecture, design, food, and wellness. The funds will mainly be used for marketing & product development to grow online bookings and geographic expansion.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>LIVETHELIFE offers the customer a selection of unique experiences, all expressing one distinct brand identity “One Life, Live it”. LTL is more than a brand with a unique identity and curated selection; it is a lifestyle brand. The budget of the properties are positioned middle to high end of the market, yet still affordable for all those who identify themselves with the brand and really want the experience.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/livethelifetv" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/LiveTheLife/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/livethelife.tv/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/yvesvandenmeerssche/" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
