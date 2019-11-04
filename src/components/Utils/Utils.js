import React from 'react'
import { format as formatDate } from 'date-fns'

export function NiceDate({ date, format = 'MM-dd-yyyy' }) {
    return formatDate(date, format)
}