import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta,  Image } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store"
import LoadingComponent from "../../../app/layout/loadingcomponent";


export default function ActivityDetails() {

   const {activityStore} = useStore();
   const {selectedActivity: activity,openForm, cancelSelectedActivity} = activityStore;
   if (!activity) return <LoadingComponent />;

    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}  />
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
           <Button.Group widths='2'>
                <Button basic onClick={() => openForm(activity.id)} color='blue' content='Edit'></Button>
                <Button basic onClick={cancelSelectedActivity} color='green' content='Cancel'></Button>
           </Button.Group>
        </CardContent>
      </Card>
    )
}