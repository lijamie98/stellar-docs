import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {CODE_LANGS, PLATFORM_VERSION} from "../constants";

export const CodeExample = ({ children }) => (
  // console.log(children),

  <Tabs groupId="programming-language">
    {React.Children.map(children, (child, index) => {
      const codeProps = child.props.children.props;
      const { className = '' } = codeProps;

      const [, language] = className.split('-');

      const platformReplace = codeProps.children.replaceAll('[platform_version]', PLATFORM_VERSION)

      return (
        <TabItem
          key={language || index}
          value={language || index}
          label={CODE_LANGS[language] || 'Example'}
        >
          <CodeBlock language={language} showLineNumbers>
            {typeof (codeProps.children) === 'string' ? platformReplace : codeProps.children}
          </CodeBlock>
        </TabItem>
      );
    })}
  </Tabs>
);
