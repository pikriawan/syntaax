import Tab from "@/components/ui/tab";
import TabPanel from "@/components/ui/tab-panel";
import TabProvider from "@/components/ui/tab-provider";

export default function Page() {
    return (
        <TabProvider>
            <div>
                <Tab index={0}>HTML</Tab>
                <Tab index={1}>CSS</Tab>
                <Tab index={2}>JS</Tab>
            </div>
            <div>
                <TabPanel index={0}>HTML Content</TabPanel>
                <TabPanel index={1}>CSS Content</TabPanel>
                <TabPanel index={2}>JS Content</TabPanel>
            </div>
        </TabProvider>
    );
}
