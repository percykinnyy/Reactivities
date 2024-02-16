import { useState } from 'react'
import { useEffect } from "react";
import axios from 'axios';
import { Header, Icon, List, ListItem } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
  const [activities,setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
        console.log(response);
        setActivities(response.data)
    })
  },[])

  return (
    <div>
         <Header as='h2' icon>
          <Icon name='settings' />
            Reactivities
         </Header> 
        <List>
          {activities.map((activity) => (
            <ListItem key = {activity.id}>
              {activity.title}
            </ListItem>
          )) 
           }
        </List>
    </div>
    
  )
}

export default App
