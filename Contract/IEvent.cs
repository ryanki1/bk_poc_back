using System;
using System.ServiceModel;
using System.Collections.Generic;

namespace WCFEvent.Service
{
    [ServiceContract(Namespace = "http://WCFEvent/2012")]
    public interface IEvent
    {
        [OperationContract]
        List<ACEvent> GetEvent();
    }
}
