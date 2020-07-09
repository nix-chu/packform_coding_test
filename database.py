# initialise database
import csv
import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
database = client["packform_coding_test"]

def import_data(name, filename):
    collection = database[name]
    with open(filename,'r') as file:
        for item in csv.DictReader(file):
            collection.insert_one(item)

# populate database
import_data("customers", "Test task - Mongo - customers.csv")
import_data("companies", "Test task - Mongo - customers.csv")
import_data("deliveries", "Test task - Postgres - deliveries.csv")
import_data("order_items", "Test task - Postgres - order_items.csv")
import_data("orders", "Test task - Postgres - orders.csv")