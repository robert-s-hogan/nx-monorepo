import { Button, Checkbox, Text, Heading, Flex } from '@with-nx/react-ui';
import { FiMail, FiDownloadCloud, FiInfo } from 'react-icons/fi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartSubtotal, selectCartTotal } from '@with-nx/store/cart';

interface OrderSummaryProps {
  onContinuePress?: () => void;
  onSendEmailInvoiceDetailsPress?: () => void;
  onExportPDFInvoiceDetailsPress?: () => void;
  onPayByCardPress?: () => void;
  onUploadPurchaseOrderPress?: () => void;
  onBackPress?: () => void;
  step: 'pay' | 'continue';
  licensors?: string[];
  canPay?: boolean;
  canProgress?: boolean;
  isFormComplete?: boolean;
  press?: ((event?: any) => void | Promise<void>) | undefined | null;
}

export const OrderSummary = ({
  onContinuePress,
  onSendEmailInvoiceDetailsPress,
  onExportPDFInvoiceDetailsPress,
  onPayByCardPress,
  onBackPress,
  onUploadPurchaseOrderPress,
  step,
  licensors,
  canPay = false,
  canProgress,
  isFormComplete,
}: OrderSummaryProps) => {
  const [drop, _drop] = useState(false);
  const [agree, _agree] = useState(false);
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);

  return (
    <div className="w-full h-full p-3 lg:p-5 bg-foreground space-y-4 mt-44">
      <Heading
        level={3}
        className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400"
      >
        Order Summary
      </Heading>

      <Flex className="items-center mb-16 justify-between">
        <Text className="text-sm">Subtotal: </Text>
        <Text className="text-lg font-semibold">${subtotal.toFixed(2)}</Text>
      </Flex>

      {step === 'pay' ? (
        <>
          <Button
            disabled={!isFormComplete}
            onClick={onPayByCardPress}
            className="btn-primary w-full flex items-center justify-center mb-4"
          >
            Pay by Card
          </Button>
          <Button
            className="w-full underline text-primary text-sm"
            onClick={onBackPress}
          >
            Back
          </Button>

          <Flex className="items-start space-x-1">
            {/* <Checkbox checked={agree} /> */}
            <div className="ml-10" onClick={() => _agree(!agree)}>
              <Text className="text-xs">
                Have read and agree to the privacy policy and terms of service
              </Text>
            </div>
          </Flex>
        </>
      ) : (
        <>
          <Button
            onClick={onContinuePress}
            className="btn-primary w-full flex items-center justify-center mb-4"
          >
            Continue
          </Button>

          {/* <div
            onMouseEnter={() => _drop(true)}
            onMouseLeave={() => _drop(false)}
          >
            <div className="p:relative">
              <Button
                onClick={onExportPDFInvoiceDetailsPress}
                className="btn-outline w-full flex items-center justify-center mb-4"
              >
                Export Invoice Details…
              </Button>
              {drop ? (
                <div className="w-full h-auto absolute unset-0 pt-12 bg-foreground border-accent"></div>
              ) : undefined}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default OrderSummary;
