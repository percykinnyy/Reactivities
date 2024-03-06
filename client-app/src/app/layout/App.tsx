import { useEffect } from "react";
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './loadingcomponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';



function App() {

  const {activityStore} = useStore();
  //const [activities,setActivities] = useState<Activity[]>([]);
  //const [loading, setLoading] = useState(true);
  //const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
      activityStore.loadActivities();
  },[activityStore])

 /*  function handleSelectActivity(id: string){
    setSelectedActivity(activityStore.activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
      setEditMode(false);
  } */

 /*  function handleCreateOrEditActivity(activity: Activity){
    setSubmitting(true);

    if (activity.id) {
       agent.Activities.update(activity).then( () => {
        setActivities([...activities.filter(x => x.id != activity.id),activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    } else{
       activity.id = uuid(); 
       agent.Activities.create(activity).then( () => {
       setActivities([...activities,activity]);  
       setSelectedActivity(activity);
       setEditMode(false);
       setSubmitting(false);

       })

    }

  } */

 

 if (activityStore.loadingInitial) return <LoadingComponent content='Loading App....' />

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em"  }}>
         <ActivityDashboard 
            /*activities={activityStore.activities} 
             selectActivity = {handleSelectActivity}
            cancelSelectActivity = {handleCancelSelectActivity}
            openForm = {handleFormOpen}
            closeForm = {handleFormClose} 
            deleteActivity = {handleDeleteActivity}
            submitting = {submitting} */
         />
      </Container>

    </>
    
  )
}

export default observer(App);
