FROM python:3.10
WORKDIR /usr/src/bank
RUN pwd
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  
RUN pip install django djangorestframework 
COPY . .
CMD ["python", "manage.py", "runserver" , "0.0.0.0:9321"]