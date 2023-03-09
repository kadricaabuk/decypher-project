import {useState} from 'react'
import { View, Drawer, TouchableOpacity, Text } from 'react-native'
import { DCText } from '../Layouts'

const DCSideMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () => {
      setDrawerOpen(true);
    }
  
    const closeDrawer = () => {
      setDrawerOpen(false);
    }
  return (
    <Drawer
      open={drawerOpen}
      onClose={closeDrawer}
      type="overlay"
      content={
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <TouchableOpacity onPress={closeDrawer}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </Drawer>
  )
}

export default DCSideMenu