AirExtraResponseHelper.java

```

public void populateAENumbersAndOrderItemResponse( AOLApplicationContext context,

                                                   AirExtraCreateResponseV1 airExtraResponse )

   throws IOException
{

   Map< UUID, OrderItemResponse > ==orderItemsResponse = populateAOLOrderItemsResponse( airExtraResponse )==;

   context.setOrderItemsResponse( orderItemsResponse );

   ==Map< UUID, List< String > >== airExtraNumbers = createOrderItemAEMap( airExtraResponse );

   context.setAirExtraNumbers( airExtraNumbers );

}
```

AOL doesn't understand AirExtraCreateResponseV1, so we have to map it to OrderItemResponse. The problem is that OrderItemResponse doesn't have a field for transactionId, so we are using a map to associate each transactionId with it's correlated airExtraCreateResponseV1.

An airExtraCreateResponseV1 has the following fields:

- ==transactionId==
- status
- responseCode
- responseMessage
- recordLocator
- orderItemResponses

OrderItemResponse has these:

- status
- responseCode
- responseMessage
- nativeHostMessage
- individualDocBaseAmount
- individualDocTaxAmount
- itemId
- passengerDocumentMap
- additionalKeyValueMap