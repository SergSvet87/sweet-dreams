import React from 'react';

import './helper.css';

export default function Helper() {
  return (
    <div className="helper">
      {/* <iframe
        name="helper-iframe"
        title="Helper"
        scrolling="no"
        style={{border: '0px', position: 'fixed', bottom: '20px', right: '20px', left: 'auto', zIndex: '16777000', margin: '0px', padding: '0px', width: '305px !important', height: '198px !important', visibility: 'visible'}}> */}
        <div id="helper__container" className="helper__trigger__button__show">
          <div
            className=" hcw__widget helper__state__start__screen hcw__widget__position__right hcw__widget__layout__1"
            id="ltr"
            data-widget-wrapper="">
            <div className="hcw-widget__button" data-chat-button="">
              <div style={{ width: '100%' }}>
                <div className="helper__notifications__block animate__notification ">
                  <div className="helper__notification__wrapper">
                    <div
                      className="helper__close__button helper__notification__btn__close"
                      data-test-id="popup__close__button"
                      id="helper__popup__close__button">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="currentColor"
                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </svg>
                    </div>
                    <div className="helper__notification__content">
                      <div className="helper__notification">
                        <div className="helper__notification__header"></div>
                        <div className="helper__notification__text">
                          <div>
                            <span>
                              Вітання! Якщо у вас є питання, ми готові вам допомогти!
                              <span className="emoji__wrap">👋</span>
                            </span>
                          </div>
                        </div>
                        <div className="helper__notification__text__hiding"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" hcw__widget__toggle _position__right _type__button">
                  <div className="hcw__widget__button _style__rounded _type__button">
                    <picture className="hcw__widget__button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="30"
                        viewBox="0 0 36 30">
                        <g fill="none" fillRule="evenodd" transform="translate(0 1)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M23.921 22.49C30.04 22.49 35 17.455 35 11.245 35 5.034 30.04 0 23.921 0H11.08C4.96 0 0 5.035 0 11.245c0 5.143 3.424 9.56 8.193 10.86-.026.93-.026 4.524-.026 4.524 0 1.651 1.544 2.405 2.806 1.351l6.569-5.489 6.38-.001zm-7.215-2.368l-.323.27-5.883 4.9V20.16l-.963-.174c-4.142-.746-7.204-4.419-7.204-8.74 0-4.902 3.917-8.878 8.746-8.878H23.92c4.83 0 8.746 3.974 8.746 8.878 0 4.902-3.917 8.877-8.746 8.877h-7.215zm-6.206-6.51c1.289 0 2.333-1.06 2.333-2.367 0-1.308-1.044-2.367-2.333-2.367-1.289 0-2.333 1.06-2.333 2.367s1.044 2.367 2.333 2.367zm7 0c1.289 0 2.333-1.06 2.333-2.367 0-1.308-1.044-2.367-2.333-2.367-1.289 0-2.333 1.06-2.333 2.367s1.044 2.367 2.333 2.367zm7 0c1.289 0 2.333-1.06 2.333-2.367 0-1.308-1.044-2.367-2.333-2.367-1.289 0-2.333 1.06-2.333 2.367s1.044 2.367 2.333 2.367z"></path>
                        </g>
                      </svg>
                    </picture>
                  </div>
                  <i className="hcw-widget-toggle__unreads">1</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </iframe> */}
    </div>
  );
}
