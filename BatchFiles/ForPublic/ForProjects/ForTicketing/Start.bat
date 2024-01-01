cd ../ExpressESMStatic
call node ForTicketing

robocopy public\Projects\Tickets  ..\ServiceTickets\public\Projects\Tickets\  /MIR

cd ../ServiceTickets
