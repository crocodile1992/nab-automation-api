package com.nab.utilities;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.*;

import static org.bitbucket.dollar.Dollar.$;

public class Utilities {
    private static final Logger LOGGER = LoggerFactory.getLogger(Utilities.class);
    private static final Set<String> USED_UNIQUE_STRING = new HashSet<>();

    public static String getNextUniqueString() {
        String randomStr = $('a', 'z').join();
        return USED_UNIQUE_STRING.add($(randomStr).shuffle().slice(4).toString()) ? "Laptop" + String.valueOf($(randomStr).shuffle().slice(4).toString()) : getNextUniqueString();
    }

    public static String generateRandomDate(int addValue) {
        Calendar randomDate = Calendar.getInstance();
        randomDate.add(Calendar.YEAR, addValue);
        return new SimpleDateFormat("yyyy").format(randomDate.getTime())
                + "-" + new SimpleDateFormat("MMM").format(randomDate.getTime())
                + "-" + new SimpleDateFormat("dd").format(randomDate.getTime());

    }
    public static List<HashMap<String, String>> getDataFromDataTable(String keyDataTable, List<List<String>> dataTable) {
        List<HashMap<String, String>> dataReturn = new ArrayList();
        for (int i = 1; i < dataTable.size(); ++i) {
            List<String> dataRow = (List) dataTable.get(i);
            if (((String) dataRow.get(0)).equalsIgnoreCase(keyDataTable)) {
                HashMap<String, String> rowDataReturn = new HashMap();
                for (int j = 1; j < dataRow.size(); ++j) {
                    rowDataReturn.put(String.valueOf(((List) dataTable.get(0)).get(j)), dataRow.get(j));
                }
                dataReturn.add(rowDataReturn);
            }
        }
        return dataReturn;
    }
}
