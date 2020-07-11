# Initialise database
import csv
import os
import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
database = client["packform_coding_test"]

def import_data(name, filename):
    '''Uploads CSV data to MongoDB database. Must run only once per collection.
    :complexity: O(N), N represents the total number of items uploaded
    '''
    collection = database[name]
    with open(filename,'r') as file:
        for item in csv.DictReader(file):
            collection.insert_one(item)

# Populate database
import_data("customers", "test_data/Test task - Mongo - customers.csv")
import_data("companies", "test_data/Test task - Mongo - customers.csv")
import_data("deliveries", "test_data/Test task - Postgres - deliveries.csv")
import_data("order_items", "test_data/Test task - Postgres - order_items.csv")
import_data("orders", "test_data/Test task - Postgres - orders.csv")