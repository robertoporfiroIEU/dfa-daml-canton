import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import { User } from '@daml.js/dfa';
import { useParty, useLedger } from '@daml/react';
import { ChooseMap } from './Maps';
import { useGlobalState } from "../contexts/GlobalState";

type Props = {
  update: Function;
}

type Flight = {
  lat: string;
  lng: string;
  time: string;
  altitude: string;
}

const CreateRequest: React.FC<Props> = ({update}) => {
  const [user] = useGlobalState('user');

  const party = useParty();
  const ledger = useLedger();
  const [flight, setFlight] = React.useState<Flight>({lat: "0", lng: "0", time: "00:00", altitude: "0"});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);

  const submit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setIsSubmitting(true);
      const parties = ["Zoolog", "Meteorologist", "Hamal"];
      await ledger.exerciseByKey(User.User.CreateRequest, party, {parties: parties, admin: "Admin", flight:flight});
    } catch (error) {
      alert(`Error sending message:\n${JSON.stringify(error)}`);
    } finally {
      setIsSubmitting(false);
//       update();
    }
  };
  
    return (
        <Form onSubmit={submit} className="create-request">
          <Button
            className='map-toggle'
            type="button"
            onClick={() => {setShowMap(!showMap)}}
            content={showMap ? "Close map" : "Open map"}
            />
          {
          <div style={{width:"100%", height: showMap ? "400px" : "0px"}}>
          {showMap && (<ChooseMap onSubmit={(lat:number,lng:number) => setFlight({lat: lat.toString(), lng: lng.toString(), time: flight.time, altitude: flight.altitude})}/>)}
          </div>}

          <Form.Field
            label='Lat coordinates'
            placeholder='Lat coordinates'
            control='input'
            type='number'
            value={flight.lat}
            onChange={e=> setFlight({lat: e.currentTarget.value, lng: flight.lng, time: flight.time, altitude: flight.altitude})}
          />

          <Form.Field
            label='Lng coordinates'
            placeholder='Lng coordinates'
            control='input'
            type='number'
            value={flight.lng}
            onChange={e => setFlight({lat: flight.lat, lng: e.currentTarget.value, time: flight.time, altitude: flight.altitude})}
          />

          <Form.Field
            label='Time'
            placeholder='Time'
            control='input'
            type='datetime-local'
            value={flight.time}
            onChange={e => setFlight({lat: flight.lat, lng: flight.lng, time: e.currentTarget.value, altitude: flight.altitude})}
          />

          <Form.Field
            label='Altitude'
            placeholder="Altitude"
            control='input'
            type="number"
            step='100'
            min='0'
            value={flight.altitude}
            onChange={e => setFlight({lat: flight.lat, lng: flight.lng, time: flight.time, altitude: e.currentTarget.value})}
          />

          <Button
            primary
            className='select-request-send-button'
            type="submit"
            disabled={isSubmitting || flight.time === "00:00"}
            loading={isSubmitting}
            content="Send"
          />

        </Form>
    );
};

export default CreateRequest;