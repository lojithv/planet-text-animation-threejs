import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }: any, ref: any) => (
  <div ref={ref} className="scroll">
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="dot">
        <h1>Obsolete Inc</h1>
        "Don't Be Evil" ~Google 2004 - 2015'
        <div>www://obsolete/</div>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1>
          Digital Dollar - Uniting Currencies, Empowering All: A Seamless
          Digital Future.
        </h1>
        Introducing the Digital Dollar, a transformational step in financial
        technology, fostering an environment of security, transparency, and
        inclusivity. We are leading a change in the digital economy by marrying
        the reliability of the traditional dollar with the efficiency of
        blockchain technology. With every Digital Dollar backed one-to-one with
        the US Dollar, we offer a stable, predictable, and trustworthy digital
        currency that's as easy to use as your favorite banking app. It's not
        just about transactions; it's about empowering people, businesses, and
        communities with a fair and accessible financial future.
      </div>
    </div>
    <div style={{ height: "100vh", display: "flex", justifyContent: "right" }}>
      <div className="dot">
        <h1>
          Coefficient Capitalism - Balancing Dynamics, Nurturing Progress: The
          Equation for Universal Prosperity
        </h1>
        As we enter an era of unparalleled technological progression and global
        integration, we bring forth an innovative economic model - Coefficient
        Capitalism. It symbolizes a unique blend of economic equilibrium and
        equitable prosperity, focusing on a holistic approach to the
        distribution of wealth, resources, and opportunities. The inception of
        Coefficient Capitalism underlines the evolution of our society towards a
        system that meticulously balances dynamics, fostering a healthy
        socioeconomic environment. This pioneering paradigm puts humanity at its
        core, recognizing that our collective growth lies in nurturing each
        segment of society while also harmonizing our interaction with the
        planet.
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1>
          DDFCU - Reforming Treasury, Empowering Citizens: The Zenith of
          Reliable Digital Sovereignty
        </h1>
        The DDFCU is poised to disrupt the status quo, bridging the chasm
        between conventional financial systems and the emerging digital economy.
        By constructing a robust, trustworthy institution committed to upholding
        regulatory integrity, the DDFCU aspires to become a beacon for both
        federal entities and the U.S. Government. The core ambition is the
        establishment of DDFCU as the vanguard in the provision of modern
        digital financial services, endorsing robust financial habits, and
        bolstering economic expansion. We aim to democratize access to tailored
        financial services and opportunities across the financial strata,
        thereby fueling the responsible dispersion of the Digital Dollar and
        stimulating worldwide adoption.
      </div>
    </div>
    <div style={{ height: "100vh", display: "flex", justifyContent: "right" }}>
      <div className="dot">
        <h1>
          Neveanet - Empowering Connectivity, Enhancing Prosperity: the Future
          of Global Infrastructure.
        </h1>
        Prospering peer-to-peer cloud technology, Neveanet has the potential to
        redefine the way we interact with the internet. Envision an online
        environment where your everyday activities, such as browsing websites or
        using apps, translate into real-time financial rewards. With Neveanet,
        each device becomes a node in an interconnected web, making the internet
        more affordable for content creators and more rewarding for users. Dive
        in, contribute, and watch as your digital dollar balance updates
        minute-by-minute. Neveanet is not just a technology; it's an ecosystem
        that nurtures prosperity. Explore further to become a part of the
        revolution.
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1>
          Wealth - Unifying Spheres, Igniting Progress: The Dawn of Financial
          Fluidity
        </h1>
        WealthWallet - Your banking needs meet the future of finance - all at
        your fingertips. That's the promise of WealthWallet, a state-of-the-art
        app bringing the power of digital currencies right into your pocket.
        Whether you're a seasoned investor, a startup enthusiast, or just
        curious about digital money, WealthWallet is the platform designed for
        you. We're here to break barriers, providing everyone - from the
        unbanked to the well-heeled - secure, easy access to a wide range of
        digital assets, including cryptocurrencies and NFTs. And we do it all
        while championing transparency, sound financial practices, and worldwide
        adoption of digital assets.
      </div>
    </div>
    <div style={{ height: "100vh", display: "flex", justifyContent: "right" }}>
      <div className="dot">
        <h1>
          WealthOS - Imagine a mobile operating system designed not just to
          connect you with the world, but to seamlessly weave the financial
          future into the fabric of your digital life.
        </h1>
        WealthOS - This is the vision behind WealthOS, an unparalleled platform
        that unites the revolutionary aspects of WealthWallet, the
        ground-breaking Neaveanet, the pioneering Digital Dollar currency, and
        the perpetual integration of cutting-edge Artificial Intelligence.
        WealthOS is more than just a software; it's an invitation to
        participate in a new digital renaissance, an ecosystem that champions
        simplicity, creativity, and endless possibilities. Here, we are
        fostering a platform where financial services meet technological
        advancement, encapsulating the best of both worlds for the discerning
        user. With WealthOS, the future isn't something we wait for, it's
        something we build, together.
      </div>
    </div>
    {/* <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the
        German inventor Count Ferdinand von Zeppelin (German pronunciation:
        [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning
        of the 20th century.
      </div>
    </div> */}
  </div>
));

export default Overlay;
