/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';

const ChangeLog = () => {
  return (
    <div>
      <Page title='change log' content=''>
        <div css={{ marginTop: '24px' }}>
          v1.1
          <ul>
            <li>Adds playground</li>
          </ul>
          </div>
      </Page>
    </div>
  );
};
export default ChangeLog;
