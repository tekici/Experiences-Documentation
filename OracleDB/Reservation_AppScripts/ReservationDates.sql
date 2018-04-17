DECLARE
    cursor c_reservationDates is
    Select RESERVATIONDATE FROM RESERVATIONS ;
    
    counter integer := 0;
    type DateArray is varray(10) of RESERVATIONS.RESERVATIONDATE%type;
    resDates DateArray:= DateArray();
BEGIN

    for n in c_reservationDates LOOP
        counter := counter + 1 ;
        resdates.extend;
        resDates(counter):=n.RESERVATIONDATE;
    END LOOP;
    --WHERE (to_char(RESERVATIONDATE, 'HH24:MI:SS') = i_date);
    
    DBMS_OUTPUT.PUT_LINE(resDates(1));

END RES_GETFREEHOURSOFDAY;