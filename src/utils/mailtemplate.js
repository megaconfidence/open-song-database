const mailtemplate = (firstname, key, date) => {
  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
      <style type="text/css" rel="stylesheet" media="all">/* cyrillic-ext */
        @font-face {
          font-family: 'PT Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0-ExdGM.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'PT Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0aExdGM.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* latin-ext */
        @font-face {
          font-family: 'PT Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0yExdGM.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'PT Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0KExQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        </style>
      <style type="text/css" rel="stylesheet" media="all">
      body {
        color: #4f5a68;
        font-family: 'PT Sans', sans-serif;
      }
      
      .email-wrapper,
      .email-content {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .email-body {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .email-body_inner {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      a {
        color: #354F52;
        text-decoration: none;
      }
      
      .content-cell {
        border: 1px solid #354F525E;
      }
      
      .icon {
        background-color: #354F52;
      }
      
      .title {
        margin: 52px 0 36px;
      }
      
      .title span {
        display: block;
        font-size: 24px;
        font-weight: 800;
        line-height: 32px;
      }
      
      .content {
        font-size: 18px;
        font-weight: 300;
        line-height: 33px;
      }
      
      .cta {
        margin: 30px 0;
      }
      
      .cta button {
        all: unset;
        color: white;
        cursor: pointer;
        font-size: 16px;
        line-height: 13px;
        font-weight: bold;
        padding: 18px 48px;
        border-radius: 5px;
        font-family: Arial;
        text-transform: uppercase;
        background-color: #354F52;
        border: 1px solid transparent;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.24));
      }
      
      .subcontent {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
      }
      
      footer {
        font-size: 10px;
        color: #8593a6;
        line-height: 16px;
        font-family: Arial;
        margin: 50px 0 10px;
        border-top: 1px solid #f0f3f7;
      }
      
      .table {
        margin: 0;
        width: 100%;
        padding: 35px 0;
      }
      
      .table_content {
        margin: 0;
        width: 100%;
      }
      
      .table_item {
        padding: 10px 0;
        font-size: 15px;
        color: #3d4a5a;
        line-height: 18px;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        font-family: PT Sans;
      }
      
      .table_item--total {
        padding: 10px 0;
      }
      
      .hidden {
        visibility: hidden;
      }
      
      td.align-right {
        font-weight: bold;
      }
      
      .table_heading {
        color: #9b9b9b;
        font-size: 14px;
        line-height: 17px;
        padding-top: 30px;
        font-family: PT Sans;
        padding-bottom: 8px;
        border-bottom: 1px solid #eaeaec;
      }
      
      .table_heading--nopad {
        padding: 0;
      }
      
      .table_heading p {
        margin: 0;
        font-size: 12px;
        color: #85878e;
      }
      
      .table_footer {
        padding-top: 15px;
        border-top: 1px solid #eaeaec;
      }
      
      .table_total {
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: #333333;
      }
      
      .table_total--label {
        padding: 0 15px 0 0;
      }
      
      @media screen and (max-width: 600px) {
        .cta {
          text-align: center;
        }
        .title {
          text-align: center;
        }
        .email-body_inner {
          width: 100% !important;
        }
        .body-content {
          padding: 0 30px 24px;
        }
        .icon {
          padding: 17px 30px;
        }
      }
      
      @media screen and (min-width: 600px) {
        .cta {
          text-align: left;
        }
        .title {
          text-align: left;
        }
        .body-content {
          padding: 0 60px 44px;
        }
        .icon {
          padding: 17px 60px;
        }
      }
      </style>
      <!--[if mso]>
      <style type="text/css">
        .f-fallback  {
          font-family: Arial, sans-serif;
        }
      </style>
    <![endif]-->
      <style type="text/css" rel="stylesheet" media="all">
      body {
        color: #4f5a68;
        font-family: 'PT Sans', sans-serif;
      }
      </style>
    </head>
    <body style="color: #4f5a68; font-family: 'PT Sans', sans-serif;">
      <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; margin: 0; padding: 0;">
        <tr>
          <td align="center">
            <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; margin: 0; padding: 0;">
              <!-- Email Body -->
              <tr>
                <td class="email-body" width="570" cellpadding="0" cellspacing="0" style="width: 100%; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; margin: 0; padding: 0;">
                  <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; margin: 0 auto; padding: 0;">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell" style="border: 1px solid #354F525E;">
                        <div class="f-fallback">
                          <header>
                            <div class="icon" style="background-color: #354F52; color: #fff; font-size: 30px;">
                              <span style="font-weight: bold;">Open Song Database</span> API
                            </div>
                          </header>
                          <div class="body-content">
                            <main>
                              <section>
                                <div class="title" style="margin: 52px 0 36px;">
                                  <span style="display: block; font-size: 24px; font-weight: 800; line-height: 32px;">API Key</span>
                                </div>
                              </section>
                              <section>
                                <div class="content" style="font-size: 18px; font-weight: 300; line-height: 33px;">
                                  <div class="content__hi">Hi ${firstname} 👋</div>
                                  <div class="content__body">
                                    <p>
                                     Your API Key is <strong>${key}</strong>
                                    </p>
                                    <p>
                                      Thanks for using The Open Song Database API
                                    </p>
                                    </br>
                                    <p style="color: #4f5a6891;
                                    font-size: 16px;">
                                    If you did not make this request please disregard this email
                                    </p>
                                  </div>
                                </div>
                              </section>
                            </main>
                            <footer style="font-size: 10px; color: #8593a6; line-height: 16px; font-family: Arial; border-top-width: 1px; border-top-color: #f0f3f7; border-top-style: solid; margin: 50px 0 10px;">
                              <p>© ${date} osdbapi.com. All rights reserved</p>
                            </footer>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`

  const text = `
  API Key

  Hi ${firstname} 👋,

  Yor API Key is ${key}
  Thanks for using The Open Song Database API

  (If you did not make this request please disregard this email)

  © ${date} osdbapi.com. All rights reserved.
  `

  return [text, html]
}

export default mailtemplate
