import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HostPage } from "ui";

const RemoteOtherPage = dynamic<{ withHostApp: boolean }>(() => import("other_remote/page"), {
  suspense: true,
  ssr: false
});

export default function HostApplication() {
  return (
    <HostPage
      hostType="NextJS"
      remoteComponents>
      <Suspense>
        <RemoteOtherPage withHostApp />
      </Suspense>
    </HostPage>
  );
}
