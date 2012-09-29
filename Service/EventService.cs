using System;
using System.ServiceModel;
using System.Collections.Generic;

namespace WCFEvent.Service
{
    public class EventService: IEvent
    {
        public List<ACEvent> GetEvent()
        {
            var events = new List<ACEvent>();
            events.Add(new ACEvent { Name = "Vegetable of the week" });
            events.Add(new ACEvent { Name = "Gardening Question Time in Fribourg" });
            events.Add(new ACEvent { Name = "Compost and soil - what options are available?" });
            return events;
        }
    }
}
