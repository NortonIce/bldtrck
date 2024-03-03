'use client'
import ReactSelect from 'react-select'

export default function ReactSelectWrapper(props: any) {
    return <ReactSelect {...props} instanceId={'test'} name="test" />
}
