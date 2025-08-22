import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import './experience.css'

export function Experience({children, companyName, Role, inDate, outDate, click}) {
  return (
    <button className='timeline-button' onClick={click}>
        <TimelineItem >
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="#9e9e9eff">
                {inDate} - {outDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                  {children}
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '40px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {companyName}
                </Typography>
                <Typography>{Role}</Typography>
            </TimelineContent>
        </TimelineItem> 
    </button>
  )
}