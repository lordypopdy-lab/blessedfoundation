import React from "react";
import Contact from "./Contact";

const Index = () => {
  const Contact = async () => {
    location.href = "/contact-us";
  };
  return (
    <>
      <div id="page" className="site dsvy-parent-header-style-4">
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <header id="masthead" className="site-header dsvy-header-style-4">
          <div className="dsvy-header-overlay">
            <div className="dsvy-pre-header-wrapper dsvy-bg-color-transparent dsvy-color-white">
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="dsvy-pre-header-left">
                    <span className="dsvy-label">
                      Book Online
                      <i
                        style={{ fontWeight: "800" }}
                        className="dsvy-base-icon-right-arrow globalcolor"
                      ></i>
                    </span>
                    <span>You can request appointmentin 24 hours</span>
                  </div>
                  <div className="dsvy-pre-header-right">
                    <ul className="dsvy-contact-info">
                      <li>
                        <i className="dsvy-cardioly-icon-phone-call"></i> Phone
                        : (+234)888.666.88
                      </li>
                      <li>
                        <ul className="dsvy-social-links">
                          <li className="dsvy-social-li dsvy-social-facebook">
                            <a href="#" target="_blank">
                              <span>
                                <i className="dsvy-base-icon-facebook-squared"></i>
                              </span>
                            </a>
                          </li>
                          <li className="dsvy-social-li dsvy-social-twitter">
                            <a href="#" target="_blank">
                              <span>
                                <i className="dsvy-base-icon-twitter-x"></i>
                              </span>
                            </a>
                          </li>
                          <li className="dsvy-social-li dsvy-social-linkedin">
                            <a href="#" target="_blank">
                              <span>
                                <i className="dsvy-base-icon-linkedin-squared"></i>
                              </span>
                            </a>
                          </li>
                          <li className="dsvy-social-li dsvy-social-youtube">
                            <a href="#" target="_blank">
                              <span>
                                {" "}
                                <i className="dsvy-base-icon-call-2"></i>{" "}
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dsvy-header-height-wrapper"
              style={{ minHeight: "80px" }}
            >
              <div className="dsvy-header-wrapper dsvy-sticky-logo-no dsvy-responsive-logo-no dsvy-responsive-header-bgcolor-white dsvy-header-sticky-yes dsvy-sticky-type- dsvy-sticky-bg-color-white">
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="dsvy-logo-menuarea dsvy-header-wrapper dsvy-bg-color-white">
                      <div className="site-branding dsvy-logo-area">
                        <div className="wrap">
                          <h1 className="site-title">
                            <a href="#" rel="home">
                              <img
                                className="dsvy-main-logo"
                                src="/images/Out09.jpeg"
                                alt="Cardioly Demo3"
                                title=""
                              />
                            </a>
                          </h1>
                        </div>
                      </div>
                      <div className="dsvy-mobile-search">
                        <div className="dsvy-header-search-btn">
                          <a title="Search" href="#">
                            <i className="dsvy-base-icon-search"></i>
                          </a>
                        </div>
                      </div>
                      <button id="menu-toggle" className="nav-menu-toggle">
                        <i className="dsvy-base-icon-menu-1"></i>
                      </button>
                      <div className="navigation-top">
                        <div className="wrap">
                          <nav
                            id="site-navigation"
                            className="main-navigation dsvy-navbar dsvy-main-active-color-globalcolor dsvy-dropdown-active-color-globalcolor"
                            aria-label="Top Menu"
                          >
                            <div className="menu-main-menu-container">
                              <ul id="dsvy-top-menu" className="menu">
                                <li
                                  id="menu-item-13"
                                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-13"
                                >
                                  <a href="#">Home</a>
                                </li>
                                <li
                                  id="menu-item-14"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14"
                                ></li>
                                <li
                                  id="menu-item-15"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15"
                                >
                                  <a href="#">Services</a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-16530"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16530"
                                    >
                                      <a href="#">Community Services</a>
                                    </li>
                                    <li
                                      id="menu-item-16531"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16531"
                                    >
                                      <a href="#">Vision impairment</a>
                                    </li>
                                    <li
                                      id="menu-item-16532"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16532"
                                    >
                                      <a href="#">Children’s services</a>
                                    </li>
                                    <li
                                      id="menu-item-16533"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16533"
                                    >
                                      <a href="#">Dental Problems</a>
                                    </li>
                                    <li
                                      id="menu-item-16534"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16534"
                                    >
                                      <a href="#">Emergency Care</a>
                                    </li>
                                    <li
                                      id="menu-item-16535"
                                      className="menu-item menu-item-type-post_type menu-item-object-dsvy-service menu-item-16535"
                                    >
                                      <a href="#">Donation and distribution</a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  id="menu-item-16"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"
                                >
                                  <a href="#teams">Our Teams</a>
                                </li>
                                <li
                                  id="menu-item-17"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17"
                                >
                                  <a href="#blog">Blog</a>
                                </li>
                                <li
                                  id="menu-item-16528"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16528"
                                >
                                  <a href="/contact-us">Contact Us</a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="dsvy-search-cart-box">
                        <div className="dsvy-cart-wrapper dsvy-cart-style-2">
                          <a
                            href="https://cardioly-demo.pbminfotech.com/demo3/cart/"
                            className="dsvy-cart-link"
                          >
                            <span className="dsvy-cart-details">
                              <span className="dsvy-cart-icon">
                                <i className="dsvy-base-icon-supermarket-2"></i>
                              </span>
                              <span className="dsvy-cart-count"> 0 </span>
                            </span>
                          </a>
                        </div>
                        <div className="dsvy-header-search-btn">
                          <a title="Search" href="#">
                            <i className="dsvy-base-icon-search"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="dsvy-header-button">
                      <a href="/make-donation">
                        <span className="dsvy-header-button-text-1">
                          Make Donations
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dsvy-slider-area">
            <p className="rs-p-wp-fix"></p>
            <div className="slider-container">
              <div id="slider-label" className="slider-label">
                Commit to be fit
              </div>
              <br />

              <div className="slider-title">
                Blessed Victoria Agenyi Foundation <br /> (NGO)
              </div>

              <div className="slider-buttons-container">
                <div
                  onClick={Contact}
                  className="slider-btn text-light contact-btn"
                >
                  CONTACT US
                </div>
                <div className="slider-btn text-dark text-dark readmore-btn">
                  Readmore
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="site-content-contain">
          <div className="site-content-wrap">
            <div id="content" className="site-content container">
              <div className="dsvy-header-search-form-wrapper">
                <div className="dsvy-search-close">
                  <i className="dsvy-base-icon-cancel"></i>
                </div>
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="https://cardioly-demo.pbminfotech.com/demo3/"
                >
                  <label for="search-form-69368a43b7ad7">
                    <span className="screen-reader-text">Search for:</span>
                  </label>
                  <input
                    type="search"
                    id="search-form-69368a43b7ad7"
                    className="search-field"
                    placeholder="Write Search Keyword &amp; Press Enter"
                  />
                  <button
                    type="submit"
                    title="Search"
                    className="search-submit"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div id="primary" className="content-area">
                <main id="main" className="site-main dsvy-page-content-wrapper">
                  <div
                    id="post-2"
                    className="post-2 page type-page status-publish hentry"
                  >
                    <div className="entry-content">
                      <div
                        data-elementor-type="wp-page"
                        data-elementor-id="2"
                        className="elementor elementor-2"
                      >
                        <div
                          className="elementor-section elementor-top-section elementor-element elementor-element-5438ecd1 dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="5438ecd1"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34e414b1 dsvy-bg-color-over-image"
                              data-id="34e414b1"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-92ea24d elementor-widget elementor-widget-dsvy_service_element"
                                  data-id="92ea24d"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_service_element.default"
                                >
                                  <div className="elementor-widget-container elementor-01">
                                    <div
                                      className="designervily-element designervily-element-service dsvy-element-service-style-2 designervily-element-viewtype-row-column designervily-gap-30px"
                                      data-show="3"
                                      data-columns="3"
                                      data-loop="false"
                                      data-autoplay="false"
                                      data-center="false"
                                      data-nav="false"
                                      data-dots="false"
                                      data-autoplayspeed="1000"
                                      data-margin="30px"
                                    >
                                      <div className="designervily-element-inner">
                                        <div className="dsvy-ele-header-area">
                                          <div className="dsvy-heading-subheading -align"></div>
                                        </div>

                                        <div className="dsvy-element-posts-wrapper row multi-columns-row">
                                          <article
                                            style={{ marginBottom: "20px" }}
                                            className="dsvy-ele dsvy-ele-service dsvy-service-style-2 col-md-8 surgery dsvy-term-26"
                                          >
                                            <div
                                              className="designervily-post-item"
                                              style={{ fontSize: "20px" }}
                                            >
                                              <span className="head-line"></span>
                                              The support of Blessed Victoria
                                              Agenyi Foundation (NGO) is aimed
                                              at people living in countries
                                              where proper healthcare is
                                              unattainable due to poor
                                              infrastructure or financial
                                              constraints. We aim to prevent or
                                              treat avoidable diseases such as
                                              blindness, vision impairment,
                                              dental problems, and related
                                              conditions. These medical
                                              conditions have significant
                                              consequences for individuals,
                                              families, and communities.
                                            </div>
                                          </article>
                                          <article className="dsvy-ele dsvy-ele-service dsvy-service-style-2 col-md-4 saving-lives dsvy-term-25">
                                            <div
                                              className="designervily-post-item"
                                              style={{ fontSize: "20px" }}
                                            >
                                              <img
                                                className="rounded"
                                                src="/images/Out01.jpg"
                                                alt=""
                                                srcset=""
                                              />
                                            </div>
                                          </article>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-74a6ab99 dsvy-bg-color-yes dsvy-elementor-bg-color-white elementor-section-stretched dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="74a6ab99"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched"}'
                        >
                          <div className="elementor-container elementor-column-gap-no">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20ad1634 dsvy-bg-color-over-image"
                              data-id="20ad1634"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-21eeb08a dsvy-align-center elementor-widget elementor-widget-dsvy_heading"
                                  data-id="21eeb08a"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="dsvy-heading-subheading center-align dsvy-reverse-heading-yes">
                                      <h4 className="dsvy-element-subtitle">
                                        This is how we work
                                      </h4>
                                      <h2 className="dsvy-element-title">
                                        Our way of working offers stable support
                                        and a sustainable future by:
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-767c4cb9 dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="767c4cb9"
                                  data-element_type="section"
                                >
                                  <div className="elementor-container elementor-column-gap-no">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b0f563 dsvy-bg-color-over-image"
                                      data-id="b0f563"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-72e43366 elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="72e43366"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Capacity Building & Skills
                                                    Development
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Training and supporting
                                                    local medical personnel and
                                                    volunteers.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-d50eba1 elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="d50eba1"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Community-Based Medical
                                                    Support
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Setting up field offices for
                                                    general support and medical
                                                    management.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-12921e00 elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="12921e00"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Accessible Healthcare
                                                    Infrastructure
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Building eye clinics at
                                                    easy-to-reach locations.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1f454abf dsvy-bg-color-over-image"
                                      data-id="1f454abf"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-2edb5fa8 elementor-widget elementor-widget-image"
                                          data-id="2edb5fa8"
                                          data-element_type="widget"
                                          data-widget_type="image.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width={413}
                                              height={2039}
                                              src="/images/Out02.jpeg"
                                              className="attachment-full rounded"
                                              alt=""
                                              srcSet="
    /images/Out02.jpeg 513w,
    /images/Out02.jpeg 286w
  "
                                              sizes="(max-width: 513px) 100vw, 513px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4012d197 dsvy-bg-color-over-image"
                                      data-id="4012d197"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-4eeff9bc elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="4eeff9bc"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Medical Equipment Support
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Donating medical Health care
                                                    equipment.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-65419689 elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="65419689"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Financing Life-Changing
                                                    Cataract Surgeries
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Providing financial support
                                                    to restore sight through
                                                    safe and effective cataract
                                                    procedures.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-3dfd7633 elementor-widget elementor-widget-dsvy_icon_heading"
                                          data-id="3dfd7633"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_icon_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-ihbox dsvy-ihbox-style-3">
                                              <div className="dsvy-ihbox-box d-flex">
                                                <div className="dsvy-ihbox-icon">
                                                  <div className="dsvy-ihbox-icon-wrapper">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-comment"></i>
                                                  </div>
                                                </div>
                                                <div className="dsvy-ihbox-contents">
                                                  <h2 className="dsvy-element-title">
                                                    Restoring Vision Through
                                                    Cataract Surgery Support
                                                  </h2>
                                                  <div className="dsvy-heading-desc">
                                                    Covering the cost of
                                                    cataract surgeries to help
                                                    individuals regain their
                                                    independence and quality of
                                                    life.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-6d9dd673 dsvy-bg-color-yes dsvy-elementor-bg-color-globalcolor elementor-section-stretched dsvy-bg-image-over-color dsvy-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="6d9dd673"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                        >
                          <div className="elementor-container elementor-column-gap-no">
                            <div
                              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-35af57c9 dsvy-text-color-white dsvy-bg-color-over-image"
                              data-id="35af57c9"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-87f0c90 elementor-widget elementor-widget-dsvy_heading"
                                  data-id="87f0c90"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="dsvy-heading-subheading -align dsvy-reverse-heading-yes">
                                      <h4 className="dsvy-element-subtitle">
                                        Our News Updates
                                      </h4>
                                      <h2 className="dsvy-element-title">
                                        Stay up-to-date and sign up for the
                                        newsletter
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-6b9f8cd9 dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="6b9f8cd9"
                                  data-element_type="section"
                                >
                                  <div className="elementor-container elementor-column-gap-no">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-48480d48 dsvy-bg-color-over-image"
                                      data-id="48480d48"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-590f94f5 elementor-widget elementor-widget-dsvy_tabs_element"
                                          data-id="590f94f5"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_tabs_element.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-tabs">
                                              <ul className="dsvy-tabs-heading">
                                                <li
                                                  className="dsvy-tab-link dsvy-tab-li-active"
                                                  data-dsvy-tab="1"
                                                >
                                                  <div className="dsvy-tab-icon">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-ambulance"></i>
                                                  </div>
                                                  <span>Emergency </span>
                                                </li>

                                                <li
                                                  className="dsvy-tab-link"
                                                  data-dsvy-tab="2"
                                                >
                                                  <div className="dsvy-tab-icon">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-medical-symbol"></i>
                                                  </div>
                                                  <span>Facilities</span>
                                                </li>

                                                <li
                                                  className="dsvy-tab-link"
                                                  data-dsvy-tab="3"
                                                >
                                                  <div className="dsvy-tab-icon">
                                                    <i className="dsvy-cardioly-icon dsvy-cardioly-icon-checkup"></i>
                                                  </div>
                                                  <span>Reaction</span>
                                                </li>
                                              </ul>

                                              <div className="dsvy-tab-content-wrapper">
                                                <div className="dsvy-tab-content dsvy-tab-content-1 dsvy-tab-active">
                                                  <div
                                                    className="dsvy-tab-content-title"
                                                    data-dsvy-tab="1"
                                                  >
                                                    <div className="dsvy-tab-icon">
                                                      <i className="dsvy-cardioly-icon dsvy-cardioly-icon-ambulance"></i>
                                                    </div>
                                                    Emergency
                                                  </div>
                                                  <div className="dsvy-tab-content-inner">
                                                    <div className="row">
                                                      <div className="col-md-6">
                                                        <img
                                                          loading="lazy"
                                                          decoding="async"
                                                          className="size-full rounded wp-image-15904"
                                                          src="/images/Out05.jpeg"
                                                          alt=""
                                                          width="284"
                                                          height="128"
                                                        />
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="dsvy-tab-inner-content mt-2">
                                                          Stay informed about
                                                          the latest activities,
                                                          outreach programs, and
                                                          impact stories from
                                                          Blessed Victoria
                                                          Agenyi Foundation
                                                          (NGO). Here, we share
                                                          updates on our medical
                                                          missions, community
                                                          initiatives,
                                                          partnerships, and
                                                          milestones as we
                                                          continue our
                                                          commitment to
                                                          improving access to
                                                          quality healthcare for
                                                          vulnerable
                                                          communities.
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="dsvy-tab-content dsvy-tab-content-2">
                                                  <div
                                                    className="dsvy-tab-content-title"
                                                    data-dsvy-tab="2"
                                                  >
                                                    <div className="dsvy-tab-icon">
                                                      <i className="dsvy-cardioly-icon dsvy-cardioly-icon-medical-symbol"></i>
                                                    </div>
                                                    Facilities
                                                  </div>
                                                  <div className="dsvy-tab-content-inner">
                                                    <div className="row">
                                                      <div className="col-md-6">
                                                        <img
                                                          loading="lazy"
                                                          decoding="async"
                                                          className="size-full wp-image-15904"
                                                          src="https://cardioly-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2020/10/tab-image.jpg"
                                                          alt=""
                                                          width="284"
                                                          height="128"
                                                        />
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="dsvy-tab-inner-content mt-2">
                                                          Be Right Path for your
                                                          Start Up with Business
                                                          Consulting with
                                                          challenges it presents
                                                          may seem daunting, but
                                                          we help you approach
                                                          change with
                                                          confidence.
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="dsvy-tab-content dsvy-tab-content-3">
                                                  <div
                                                    className="dsvy-tab-content-title"
                                                    data-dsvy-tab="3"
                                                  >
                                                    <div className="dsvy-tab-icon">
                                                      <i className="dsvy-cardioly-icon dsvy-cardioly-icon-checkup"></i>
                                                    </div>
                                                    Reaction
                                                  </div>
                                                  <div className="dsvy-tab-content-inner">
                                                    <div className="row">
                                                      <div className="col-md-6">
                                                        <img
                                                          loading="lazy"
                                                          decoding="async"
                                                          className="size-full wp-image-15904"
                                                          src="https://cardioly-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2020/10/tab-image.jpg"
                                                          alt=""
                                                          width="284"
                                                          height="128"
                                                        />
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="dsvy-tab-inner-content mt-2">
                                                          Be Right Path for your
                                                          Start Up with Business
                                                          Consulting with
                                                          challenges it presents
                                                          may seem daunting, but
                                                          we help you approach
                                                          change with
                                                          confidence.
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-41b01fd dsvy-bg-color-yes dsvy-elementor-bg-color-secondary dsvy-bg-color-over-image"
                              data-id="41b01fd"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-55599d75 elementor-widget elementor-widget-heading"
                                  data-id="55599d75"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Enter Details**
                                    </h2>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-281e8fdb elementor-widget elementor-widget-shortcode"
                                  data-id="281e8fdb"
                                  data-element_type="widget"
                                  data-widget_type="shortcode.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div
                                        className="wpcf7 no-js"
                                        id="wpcf7-f15964-p2-o1"
                                        lang="en-US"
                                        dir="ltr"
                                        data-wpcf7-id="15964"
                                      >
                                        <div className="screen-reader-response">
                                          <p
                                            role="status"
                                            aria-live="polite"
                                            aria-atomic="true"
                                          ></p>
                                          <ul></ul>
                                        </div>
                                        <form
                                          action="/demo3/#wpcf7-f15964-p2-o1"
                                          method="post"
                                          className="wpcf7-form init"
                                          aria-label="Contact form"
                                          novalidate="novalidate"
                                          data-status="init"
                                        >
                                          <div className="main-form appointment-form-2">
                                            <div className="row">
                                              <div className="col-sm-12">
                                                <div className="input-group">
                                                  <p>
                                                    <span
                                                      className="wpcf7-form-control-wrap"
                                                      data-name="your-name"
                                                    >
                                                      <input
                                                        size="40"
                                                        maxlength="400"
                                                        className="wpcf7-form-control wpcf7-text"
                                                        aria-invalid="false"
                                                        placeholder="First Name*"
                                                        value=""
                                                        type="text"
                                                        name="your-name"
                                                      />
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="input-group">
                                                  <p>
                                                    <span
                                                      className="wpcf7-form-control-wrap"
                                                      data-name="your-email"
                                                    >
                                                      <input
                                                        size="40"
                                                        maxlength="400"
                                                        className="wpcf7-form-control wpcf7-text"
                                                        aria-invalid="false"
                                                        placeholder="Last Name*"
                                                        value=""
                                                        type="text"
                                                        name="your-email"
                                                      />
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="input-group">
                                                  <p>
                                                    <span
                                                      className="wpcf7-form-control-wrap"
                                                      data-name="your-email"
                                                    >
                                                      <input
                                                        size="40"
                                                        maxlength="400"
                                                        className="wpcf7-form-control wpcf7-text"
                                                        aria-invalid="false"
                                                        placeholder="Email*"
                                                        value=""
                                                        type="text"
                                                        name="your-email"
                                                      />
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="input-group input-button">
                                                  <p>
                                                    <span
                                                      className="wpcf7-form-control-wrap"
                                                      data-name="message"
                                                    >
                                                      <textarea
                                                        cols="40"
                                                        rows="4"
                                                        maxlength="2000"
                                                        className="wpcf7-form-control wpcf7-textarea"
                                                        aria-invalid="false"
                                                        placeholder="Comment (Optional)"
                                                        name="message"
                                                      ></textarea>
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="input-group">
                                                  <p>
                                                    <input
                                                      className="wpcf7-form-control wpcf7-submit has-spinner"
                                                      type="submit"
                                                      value="Services at One Glance"
                                                    />
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wpcf7-response-output"
                                            aria-hidden="true"
                                          ></div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          id="blog"
                          className="mt-5 elementor-section elementor-top-section elementor-element elementor-element-3a076056 dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="3a076056"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-no">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6f8e38bb dsvy-bg-color-over-image"
                              data-id="6f8e38bb"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-175ebea0 elementor-section-content-middle dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="175ebea0"
                                  data-element_type="section"
                                >
                                  <div className="elementor-container elementor-column-gap-no">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4fc9f057 dsvy-bg-color-over-image"
                                      data-id="4fc9f057"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-c2033b3 dsvy-align-left elementor-widget elementor-widget-dsvy_heading"
                                          data-id="c2033b3"
                                          data-element_type="widget"
                                          data-widget_type="dsvy_heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="dsvy-heading-subheading left-align dsvy-reverse-heading-yes">
                                              <h4 className="dsvy-element-subtitle">
                                                Read Our Blog
                                              </h4>
                                              <h2 className="dsvy-element-title">
                                                Featured News and Advices
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5ab1f0b5 dsvy-bg-color-over-image"
                                      data-id="5ab1f0b5"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-56f03863 elementor-widget elementor-widget-text-editor"
                                          data-id="56f03863"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <p>
                                              We provide the special tips and
                                              advice&#8217;s of heath care
                                              treatment and high level of best
                                              technology involve in the our
                                              hospital.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div
                                  className="elementor-element elementor-element-6c554f05 elementor-widget elementor-widget-dsvy_blog_element"
                                  data-id="6c554f05"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_blog_element.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div
                                      className="designervily-element designervily-element-blog dsvy-element-blog-style-2 designervily-element-viewtype-row-column designervily-gap-30px"
                                      data-show="3"
                                      data-columns="3"
                                      data-loop="false"
                                      data-autoplay="false"
                                      data-center="false"
                                      data-nav="false"
                                      data-dots="false"
                                      data-autoplayspeed="1000"
                                      data-margin="30px"
                                    >
                                      <div className="designervily-element-inner">
                                        <div className="dsvy-ele-header-area">
                                          <div className="dsvy-heading-subheading -align"></div>
                                        </div>

                                        <div className="dsvy-element-posts-wrapper row multi-columns-row">
                                          <article className="dsvy-ele dsvy-ele-blog dsvy-blog-style-2 col-md-4 treatment dsvy-term-5 dsvy-odd dsvy-col-odd">
                                            <div className="post-item">
                                              <div className="dsvy-featured-container">
                                                <div className="dsvy-featured-wrapper">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="770"
                                                    height="635"
                                                    src="/images/Out04.jpeg"
                                                    className="attachment-dsvy-img-770x635 size-dsvy-img-770x635 wp-post-image"
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="dsvy-meta-date">
                                                  <span>March 12, 2023</span>
                                                </div>
                                              </div>
                                              <div className="designervily-box-content">
                                                <div className="dsvy-meta-container">
                                                  <div className="dsvy-meta-author-wrapper dsvy-meta-line">
                                                    <a
                                                      href="#"
                                                      title="Posted by Admin"
                                                      rel="author"
                                                    >
                                                      <i className="dsvy-base-icon-user"></i>
                                                      Admin
                                                    </a>
                                                  </div>
                                                  <div className="dsvy-meta-comment-wrapper dsvy-meta-line">
                                                    <i className="dsvy-base-icon-chat-1"></i>
                                                    <span className="dsvy-meta dsvy-meta-comments">
                                                      Comments
                                                    </span>
                                                  </div>
                                                </div>
                                                <h3 className="dsvy-post-title">
                                                  <a
                                                    href="#"
                                                    title="Go to Is Running Really Good for the Heart?"
                                                  >
                                                    Restoring Hope Through
                                                    Life-Changing Surgery
                                                  </a>
                                                </h3>
                                                <div className="designervily-box-desc">
                                                  <div className="designervily-box-desc-text">
                                                    <p>
                                                      October 21, 2023 — On this
                                                      remarkable day, the
                                                      Blessed Victoria Agenyi
                                                      Foundation (NGO) carried
                                                      out a successful surgical
                                                      outreach, bringing renewed
                                                      hope and healing to a
                                                      patient in need. With the
                                                      Founder present during the
                                                      procedure, this moment
                                                      reflects our unwavering
                                                      commitment to accessible
                                                      healthcare, dignity, and
                                                      life-changing impact.
                                                      Together, we continue
                                                      restoring health,
                                                      rebuilding lives, and
                                                      strengthening our
                                                      communities.
                                                    </p>
                                                  </div>
                                                  <div className="dsvy-read-more-link">
                                                    <a href="#">
                                                      <span>Read more</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                          <article className="dsvy-ele dsvy-ele-blog dsvy-blog-style-2 col-md-4 healthcare dsvy-term-12 dsvy-even dsvy-col-odd">
                                            <div className="post-item">
                                              <div className="dsvy-featured-container">
                                                <div className="dsvy-featured-wrapper">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="770"
                                                    height="635"
                                                    src="/images/Out05.jpeg"
                                                    className="attachment-dsvy-img-770x635 size-dsvy-img-770x635 wp-post-image"
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="dsvy-meta-date">
                                                  <span>OCTOBER 24, 2024</span>
                                                </div>
                                              </div>
                                              <div className="designervily-box-content">
                                                <div className="dsvy-meta-container">
                                                  <div className="dsvy-meta-author-wrapper dsvy-meta-line">
                                                    <a
                                                      href="#"
                                                      title="Posted by Admin"
                                                      rel="author"
                                                    >
                                                      <i className="dsvy-base-icon-user"></i>
                                                      Admin
                                                    </a>
                                                  </div>
                                                  <div className="dsvy-meta-comment-wrapper dsvy-meta-line">
                                                    <i className="dsvy-base-icon-chat-1"></i>
                                                    <span className="dsvy-meta dsvy-meta-comments">
                                                      Comments
                                                    </span>
                                                  </div>
                                                </div>
                                                <h3 className="dsvy-post-title">
                                                  <a
                                                    href="#"
                                                    title="Go to Modeling data increase to endovascular therapy"
                                                  >
                                                    Dedicated Care, Lasting
                                                    Impact
                                                  </a>
                                                </h3>
                                                <div className="designervily-box-desc">
                                                  <div className="designervily-box-desc-text">
                                                    <p>
                                                      At the Blessed Victoria
                                                      Agenyi Foundation (NGO), every
                                                      medical outreach is driven
                                                      by professionalism,
                                                      compassion, and a deep
                                                      commitment to saving
                                                      lives. This moment
                                                      captures our Founder
                                                      alongside members of the
                                                      medical team during a
                                                      patient consultation and
                                                      surgical support session.
                                                      Through collaborative
                                                      expertise and hands-on
                                                      leadership, we continue to
                                                      provide quality healthcare
                                                      services to underserved
                                                      communities — ensuring
                                                      that hope, healing, and
                                                      dignity remain at the
                                                      center of everything we
                                                      do.
                                                    </p>
                                                  </div>
                                                  <div className="dsvy-read-more-link">
                                                    <a href="#">
                                                      <span>Read more</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                          <article className="dsvy-ele dsvy-ele-blog dsvy-blog-style-2 col-md-4 discounts dsvy-term-14 dsvy-odd dsvy-col-odd">
                                            <div className="post-item">
                                              <div className="dsvy-featured-container">
                                                <div className="dsvy-featured-wrapper">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="770"
                                                    height="635"
                                                    src="/images/Out01.jpg"
                                                    className="attachment-dsvy-img-770x635 size-dsvy-img-770x635 wp-post-image"
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="dsvy-meta-date">
                                                  <span>November 17, 2025</span>
                                                </div>
                                              </div>
                                              <div className="designervily-box-content">
                                                <div className="dsvy-meta-container">
                                                  <div className="dsvy-meta-author-wrapper dsvy-meta-line">
                                                    <a
                                                      href="#"
                                                      title="Posted by Admin"
                                                      rel="author"
                                                    >
                                                      <i className="dsvy-base-icon-user"></i>
                                                      Admin
                                                    </a>
                                                  </div>
                                                  <div className="dsvy-meta-comment-wrapper dsvy-meta-line">
                                                    <i className="dsvy-base-icon-chat-1"></i>
                                                    <span className="dsvy-meta dsvy-meta-comments">
                                                      Comments
                                                    </span>
                                                  </div>
                                                </div>
                                                <h3 className="dsvy-post-title">
                                                  <a
                                                    href="#"
                                                    title="Go to Get the Exercise Tips for Limited Mobility"
                                                  >
                                                    Community Outreach and
                                                    Impact
                                                  </a>
                                                </h3>
                                                <div className="designervily-box-desc">
                                                  <div className="designervily-box-desc-text">
                                                    <p>
                                                      Through the continuous
                                                      efforts of the Blessed
                                                      Victoria Agenyi Foundation
                                                      (NGO), lives are being
                                                      touched beyond hospital
                                                      walls. This image reflects
                                                      a moment of unity — our
                                                      Founder alongside
                                                      community members during a
                                                      recent outreach visit. By
                                                      engaging directly with
                                                      families, elders, and
                                                      local leaders, we
                                                      strengthen trust, promote
                                                      health awareness, and
                                                      ensure that support
                                                      reaches those who need it
                                                      most. Together, we are
                                                      building healthier,
                                                      stronger communities — one
                                                      life at a time.
                                                    </p>
                                                  </div>
                                                  <div className="dsvy-read-more-link">
                                                    <a href="#">
                                                      <span>Read more</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-5bc4ef01 dsvy-bg-color-yes dsvy-elementor-bg-color-light elementor-section-stretched elementor-section-content-middle dsvy-col-stretched-none dsvy-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="5bc4ef01"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched"}'
                        >
                          <div className="elementor-container elementor-column-gap-no">
                            <div
                              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-361eaa60 dsvy-bg-color-over-image"
                              data-id="361eaa60"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-26cd9a6d elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit dsvy-align-left elementor-widget elementor-widget-dsvy_heading"
                                  data-id="26cd9a6d"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="dsvy-heading-subheading left-align dsvy-reverse-heading-yes">
                                      <h4 className="dsvy-element-subtitle">
                                        Make Donations
                                      </h4>
                                      <h2 className="dsvy-element-title">
                                        Donations make our work possible
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-267bdf02 elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor"
                                  data-id="267bdf02"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    Our activities for good eye care are
                                    possible through active funding. Eye Care
                                    Foundation runs entirely on donations, large
                                    and small. Donations make our work possible;
                                    without them, these regions have no
                                    opportunities for good eye care. We use our
                                    donations directly for all our activities.
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-32c98e5f elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-dsvy_icon_heading"
                                  data-id="32c98e5f"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_icon_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="dsvy-ihbox dsvy-ihbox-style-5">
                                      <div className="d-flex">
                                        <div className="dsvy-ihbox-icon">
                                          <div className="dsvy-ihbox-icon-wrapper">
                                            <i className="dsvy-cardioly-icon dsvy-cardioly-icon-medicine"></i>
                                          </div>
                                        </div>
                                        <div className="dsvy-ihbox-contents">
                                          <h2 className="dsvy-element-title">
                                            Medical Solutions
                                          </h2>
                                          <div className="dsvy-heading-desc">
                                            We are provide the best and health
                                            care medical solutions
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-6ffeab0b elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-dsvy_icon_heading"
                                  data-id="6ffeab0b"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_icon_heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="dsvy-ihbox dsvy-ihbox-style-5">
                                      <div className="d-flex">
                                        <div className="dsvy-ihbox-icon">
                                          <div className="dsvy-ihbox-icon-wrapper">
                                            <i className="dsvy-cardioly-icon dsvy-cardioly-icon-heart-rate-monitor"></i>
                                          </div>
                                        </div>
                                        <div className="dsvy-ihbox-contents">
                                          <h2 className="dsvy-element-title">
                                            Heart rate monitor
                                          </h2>
                                          <div className="dsvy-heading-desc">
                                            Our doctor check patient heart rate
                                            on heart rate monitor
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dsvy-read-more-link">
                                    <a href="#">
                                      <span>Read more</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-20ddf093 dsvy-bg-color-over-image"
                              data-id="20ddf093"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-fd71f88 elementor-widget elementor-widget-dsvy_ptable_element"
                                  data-id="fd71f88"
                                  data-element_type="widget"
                                  data-widget_type="dsvy_ptable_element.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="designervily-ele designervily-ele-pricing-table designervily-ele-ptable-style-1">
                                      <div className="dsvy-ele-header-area">
                                        <div className="dsvy-heading-subheading -align"></div>
                                      </div>
                                      <div className="dsvy-ptable-cols row multi-columns-row">
                                        <div className="dsvy-ptable-col col-md-12">
                                          <img
                                            src="/images/Out03.jpeg"
                                            className="rounded"
                                            alt=""
                                            srcset=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <footer
            id="colophon"
            className="dsvy-footer-section site-footer dsvy-text-color-blackish dsvy-bg-color-light dsvy-footer-menu-yes dsvy-footer-widget-yes"
          >
            <div className="dsvy-footer-section dsvy-footer-big-area-wrapper dsvy-bg-color-transparent">
              <div className="footer-wrap dsvy-footer-big-area">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-9">
                      <div className="d-md-flex align-items-center">
                        <div className="dsvy-footer-logo">
                          <img
                            className="dsvy-main-logo"
                            src="/images/Out09.jpeg"
                            alt="Cardioly Demo3"
                            title="Cardioly Demo3"
                          />
                        </div>
                        <div className="d-md-flex">
                          <div className="dsvy-footer-boxes dsvy-footer-boxes-1 col-md-6">
                            <div className="dsvy-footer-contact-info">
                              <div className="dsvy-footer-contact-info-inner d-flex align-items-center">
                                <i className="dsvy-base-icon-location"></i>
                                <div className="dsvy-footer-contact-info-wrap">
                                  <span className="dsvy-label dsvy-label-1">
                                    Our Address
                                  </span>
                                  2, Action Area Block, Abuja, FCT Nigeria
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dsvy-footer-boxes dsvy-footer-boxes-2 col-md-6">
                            <div className="dsvy-footer-contact-info">
                              <div className="dsvy-footer-contact-info-inner d-flex align-items-center">
                                <i className="dsvy-cardioly-icon-phone-call"></i>
                                <div className="dsvy-footer-contact-info-wrap">
                                  <span className="dsvy-label dsvy-label-2">
                                    Phone Number
                                  </span>
                                  (+234)708.292.4136
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 dsvy-footer-social-icon">
                      <ul className="dsvy-social-links">
                        <li className="dsvy-social-li dsvy-social-facebook">
                          <a
                            href="https://www.facebook.com/profile.php?id=61585461172920"
                            target="_blank"
                          >
                            <span>
                              <i className="dsvy-base-icon-facebook-squared"></i>
                            </span>
                          </a>
                        </li>
                        <li className="dsvy-social-li dsvy-social-twitter">
                          <a href="#" target="_blank">
                            <span>
                              <i className="dsvy-base-icon-twitter-x"></i>
                            </span>
                          </a>
                        </li>
                        <li className="dsvy-social-li dsvy-social-linkedin">
                          <a href="#" target="_blank">
                            <span>
                              <i className="dsvy-base-icon-linkedin-squared"></i>
                            </span>
                          </a>
                        </li>
                        <li className="dsvy-social-li dsvy-social-youtube">
                          <a href="#" target="_blank">
                            <span>
                              <i className="dsvy-base-icon-youtube-play"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dsvy-footer-section footer-wrap dsvy-footer-widget-area dsvy-bg-color-light">
              <div className="container">
                <div className="row">
                  <div className="dsvy-footer-widget dsvy-footer-widget-col-1 col-md-6 col-lg-3">
                    <aside
                      id="nav_menu-1"
                      className="widget-odd widget-last widget-first widget-1 dsvy-float-menu widget widget_nav_menu cardioly_widget cardioly_widget_count_1"
                    >
                      <h2 className="widget-title">Services</h2>
                      <div className="menu-information-container">
                        <ul id="menu-information" className="menu">
                          <li
                            id="menu-item-16057"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16057"
                          >
                            <a href="#">Community Services</a>
                          </li>
                          <li
                            id="menu-item-16058"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16058"
                          >
                            <a href="#">Vision impairment</a>
                          </li>
                          <li
                            id="menu-item-16059"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16059"
                          >
                            <a href="#">Dental problems</a>
                          </li>
                          <li
                            id="menu-item-16060"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16060"
                          >
                            <a href="#">Children's Services</a>
                          </li>
                          <li
                            id="menu-item-16061"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16061"
                          >
                            <a href="#">Emergency Care</a>
                          </li>
                          <li
                            id="menu-item-16062"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16062"
                          >
                            <a href="#">
                              Donation and distribution of medical eye care
                              equipment
                            </a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="dsvy-footer-widget dsvy-footer-widget-col-2 col-md-6 col-lg-3">
                    <aside
                      id="cardioly_recent_posts_widget-2"
                      className="widget-odd widget-last widget-first widget-1 widget cardioly_recent_posts_widget cardioly_widget cardioly_widget_count_2"
                    >
                      <h2 className="widget-title">Latest News</h2>
                      <ul className="dsvy-rpw-list">
                        <li>
                          <a href="#">
                            <span className="dsvy-rpw-img">
                              <img
                                width="150"
                                height="150"
                                src="/images/Out02.jpeg"
                                className="attachment-thumbnail size-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                srcset="
                                /images/Out02.jpeg 150w,
                                /images/Out02.jpeg 770w,
                                /images/Out02.jpeg 300w
                              "
                                sizes="(max-width: 150px) 100vw, 150px"
                              />
                            </span>
                          </a>
                          <span className="dsvy-rpw-content">
                            <span className="dsvy-rpw-title">
                              <a href="#">
                                Is Running Really Good for the Heart?
                              </a>
                            </span>
                            <span className="dsvy-rpw-date">
                              <a href="#">August 27, 2020</a>
                            </span>
                          </span>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dsvy-rpw-img">
                              <img
                                width="150"
                                height="150"
                                src="/images/Out06.jpeg"
                                className="attachment-thumbnail size-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                sizes="(max-width: 150px) 100vw, 150px"
                                srcset="
                                /images/Out06.jpeg 150w,
                                /images/Out06.jpeg 770w,
                                /images/Out06.jpeg 300w
                              "
                              />
                            </span>
                          </a>
                          <span className="dsvy-rpw-content">
                            <span className="dsvy-rpw-title">
                              <a href="#">
                                Modeling data increase to endovascular therapy
                              </a>
                            </span>
                            <span className="dsvy-rpw-date">
                              <a href="#">August 27, 2020</a>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </aside>
                  </div>
                  <div className="dsvy-footer-widget dsvy-footer-widget-col-3 col-md-6 col-lg-3">
                    <aside
                      id="text-3"
                      className="widget-odd widget-last widget-first widget-1 widget widget_text cardioly_widget cardioly_widget_count_3"
                    >
                      <h2 className="widget-title">Newsletter</h2>
                      <div className="textwidget">
                        <form
                          id="mc4wp-form-1"
                          className="mc4wp-form mc4wp-form-16053"
                          method="post"
                          data-id="16053"
                          data-name="Newsletter"
                        >
                          <div className="mc4wp-form-fields">
                            Sign up today for hints, tips and the latest product
                            news
                            <div className="dsvy-footer-newsletter">
                              <input
                                type="email"
                                name="EMAIL"
                                placeholder="Your email address"
                                required
                              />
                              <button type="submit" value="Sign up">
                                Submit{" "}
                                <i className="dsvy-base-icon-paper-plane"></i>
                              </button>
                            </div>
                          </div>
                          <label style={{ display: "none !important" }}>
                            Leave this field empty if you're human:
                            <input
                              type="text"
                              name="_mc4wp_honeypot"
                              value=""
                              tabindex="-1"
                              autocomplete="off"
                            />
                          </label>
                          <input
                            type="hidden"
                            name="_mc4wp_timestamp"
                            value="1765182019"
                          />
                          <input
                            type="hidden"
                            name="_mc4wp_form_id"
                            value="16053"
                          />
                          <input
                            type="hidden"
                            name="_mc4wp_form_element_id"
                            value="mc4wp-form-1"
                          />
                          <div className="mc4wp-response"></div>
                        </form>
                      </div>
                    </aside>
                  </div>
                  <div className="dsvy-footer-widget dsvy-footer-widget-col-4 col-md-6 col-lg-3">
                    <aside
                      id="custom_html-1"
                      className="widget_text widget-odd widget-last widget-first widget-1 widget widget_custom_html cardioly_widget cardioly_widget_count_4"
                    >
                      <h2 className="widget-title">Opening Hours</h2>
                      <div className="textwidget custom-html-widget">
                        <div className="dsvy-timelist-ele-wrapper">
                          <div className="dsvy-timelist-wrapper">
                            <ul className="dsvy-timelist-list">
                              <li>
                                <span className="dsvy-timelist-li-title">
                                  Mon – Tue
                                </span>
                                <span className="dsvy-timelist-li-value">
                                  10:00 – 18:00
                                </span>
                              </li>
                              <li>
                                <span className="dsvy-timelist-li-title">
                                  Wed – Thur
                                </span>
                                <span className="dsvy-timelist-li-value">
                                  10:00 – 17:00
                                </span>
                              </li>
                              <li>
                                <span className="dsvy-timelist-li-title">
                                  Fri – Sat
                                </span>
                                <span className="dsvy-timelist-li-value">
                                  10:00 – 12:30
                                </span>
                              </li>
                              <li>
                                <span className="dsvy-timelist-li-title">
                                  Saturday
                                </span>
                                <span className="dsvy-timelist-li-value">
                                  10:00 – 12:30
                                </span>
                              </li>
                              <li>
                                <span className="dsvy-timelist-li-title">
                                  Sunday
                                </span>
                                <span className="dsvy-timelist-li-value">
                                  Closed
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
            <div className="dsvy-footer-section dsvy-footer-text-area dsvy-bg-color-globalcolor">
              <div className="container">
                <div className="dsvy-footer-text-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dsvy-footer-copyright-text-area">
                        Copyright &copy; 2026-
                        <a href="https://cardioly-demo.pbminfotech.com/demo3/">
                          Blessed-Victoria-Agenyi-Foundation(NGO)
                        </a>
                        , All Rights Reserved.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dsvy-footer-menu-area">
                        <div className="menu-footer-menu-container">
                          <ul className="dsvy-footer-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16540">
                              <a href="https://cardioly-demo.pbminfotech.com/demo3/faq/">
                                FAQ
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16539">
                              <a href="https://cardioly-demo.pbminfotech.com/demo3/about-us/">
                                About Us
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16541">
                              <a href="https://cardioly-demo.pbminfotech.com/demo3/contact-us/">
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <a href="#" title="Back to Top" className="scroll-to-top">
        <i className="dsvy-base-icon-up-open-big"></i>
      </a>
    </>
  );
};

export default Index;
