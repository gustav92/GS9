package com.demach.konotor;

import android.content.Context;
import android.content.Intent;

import com.demach.konotor.Konotor;
import com.demach.konotor.access.K;
import com.google.android.gcm.GCMBaseIntentService;

public class GCMIntentService extends GCMBaseIntentService
{
    public static final String TAG = GCMIntentService.class.getName();

    public GCMIntentService()
    {
        super(K.ANDROID_PROJECT_SENDER_ID);
    }

    @Override
    protected void onMessage(Context context, Intent intent)
    {
        Konotor.getInstance(context).handleGcmOnMessage(intent);
    }

    @Override
    protected void onError(Context context, String errorId)
    {
        Konotor.getInstance(context).handleGcmOnError(errorId);
    }

    @Override
    protected void onRegistered(Context context, String registrationId)
    {
        Konotor.getInstance(context).handleGcmOnRegistered(registrationId);
    }

    @Override
    protected void onUnregistered(Context context, String registrationId)
    {
        Konotor.getInstance(context).handleGcmOnUnRegistered(registrationId);
    }
}
