import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleTabs from './SingleTabs';
const HomeTabs = () => {
    const [tabs, setTab] = useState([]);
    const [activeTabs, setActiveTab] = useState("marvel")

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(result => {
                setTab(result)
            })
    }, [activeTabs]);
    const result = tabs?.filter(tab => tab.category == activeTabs);

    const handleTab = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className='py-10'>
            <Tabs className="text-center text-teal-600 font-semibold">
                <TabList>
                    <Tab onClick={() => handleTab('marvel')}>Marvel</Tab>
                    <Tab onClick={() => handleTab('avengers')}>Avengers</Tab>
                    <Tab onClick={() => handleTab('starwars')}>Starwars</Tab>
                </TabList>
               <div className='grid sm:grid-cols-3 pt-5 gap-5'>
               {
                    result.map(tabs => <SingleTabs
                     key={tabs._id}
                     tabs={tabs}
                    ></SingleTabs>)
                }
               </div>
            </Tabs>

        </div>
    );
};

export default HomeTabs;