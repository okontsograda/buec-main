"use client"
import { Map, Marker } from 'mapkit-react'

const map = () => {
return (
    <Map colorScheme={2} initialRegion={{
        centerLatitude: 34.92896967008763,
        centerLongitude: -82.25971943391859,
        latitudeDelta: 0.008983224688968505,
        longitudeDelta: 0.013059981452926195
    }} token="eyJraWQiOiJCUVUzWTNVVkhEIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJaNjNERzVUOFBIIiwiaWF0IjoxNzI1MzE3ODQxLCJleHAiOjE3MjU5NTE1OTl9.8tGVky00CdX-MPQWHL4pc8v98EHLQe35qEt9_nPGmMJD3bpzy1jWIRYskrNt8yRbmibf-coZV2SsBagJKUqNOA">
        <Marker latitude={34.929387} longitude={-82.2604026} title="BUGC"/>
    </Map>
)
}
export default map; 