import { useState } from 'react';
import TabButton from './tab-button';
import './tab.css';
import TabContent from './tab-content';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('components');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={activeTab === 'components'}
          onSelect={() => handleTabSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={activeTab === 'jsx'}
          onSelect={() => handleTabSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={activeTab === 'props'}
          onSelect={() => handleTabSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={activeTab === 'state'}
          onSelect={() => handleTabSelect('state')}
        >
          State
        </TabButton>
      </menu>
      <TabContent activeTab={activeTab} />
    </section>
  );
};

export default Tab;
