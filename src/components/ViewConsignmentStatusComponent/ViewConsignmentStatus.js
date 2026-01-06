import './ViewConsignmentStatus.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { __consignmentapiurl, __trackingapiurl } from '../../API_URL';
import { useParams } from 'react-router-dom';

function ViewConsignmentStatus() {
    const [trackingDetails, setTrackingDetails] = useState([])
    const [adminstatus, setadminstatus] = useState("");
    const [statusList, setStatusList] = useState([]); // ✅ added state
    const params = useParams();

    useEffect(() => {
        axios.get(__consignmentapiurl + "fetch", {
            params: { email: localStorage.getItem("email") }
        }).then((result) => {
            setTrackingDetails(result.data);

            const trackString = result.data[0].track || "";
            setadminstatus(trackString);

            // ✅ split string into array
            setStatusList(trackString.split(",").map(s => s.trim()));

        }).catch((err) => {
            console.log(err)
        })

    }, [adminstatus])

    return (
        <div className="track-consignment">
            {trackingDetails.length > 0 ? (
                trackingDetails.map((row) => (
                    <div className="track-card" key={row._id}>
                        <p><span>Consignment ID:</span> {row._id}</p>

                        {/* ✅ UPDATED LINE ONLY */}
                        <span>Status:</span>
                        {statusList.map((status, index) => (
                            <p className="status" key={index}>&rarr; &nbsp;{status} </p>
                            
                        ))}

                        <p className="info"><span>Info:</span> {row.info}</p>
                    </div>
                ))
            ) : (
                <p className="no-data">No tracking details found</p>
            )}
        </div>
    )
}

export default ViewConsignmentStatus;
