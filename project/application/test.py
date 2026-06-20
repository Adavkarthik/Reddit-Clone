import pandas as pd
import datetime

check_date="01-03-2026"
date=datetime.datetime.now()
format_=date.strftime("%d-%m-%Y")
str_to_date=pd.to_datetime(format_,format="%d-%m-%Y",errors="coerce")
print(str_to_date-pd.DateOffset(month=3))
